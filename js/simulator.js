// ============================================================
// SIMULATOR.JS — Lógica de renderizado y animación
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  // ---- DOM References ----
  const casesGrid = document.getElementById('cases-grid');
  const btnSimulate = document.getElementById('btn-simulate');
  const btnReset = document.getElementById('btn-reset');
  const oldStepsEl = document.getElementById('old-steps');
  const newStepsEl = document.getElementById('new-steps');
  const oldResultEl = document.getElementById('old-result');
  const newResultEl = document.getElementById('new-result');
  const loadingOverlay = document.getElementById('loading-overlay');
  const loaderCaseName = document.getElementById('loader-case-name');
  const vsDivider = document.getElementById('vs-divider');
  const statsBar = document.getElementById('stats-bar');

  // ---- State ----
  let selectedCase = null;
  let isRunning = false;

  // ---- Initialize ----
  renderCases();

  // ============================================================
  // RENDER CASES
  // ============================================================
  function renderCases() {
    casesGrid.innerHTML = CASES.map(c => `
      <div class="case-card" data-case-id="${c.id}" id="case-${c.id}">
        <span class="case-icon">${c.icon}</span>
        <div class="case-title">${c.title}</div>
        <div class="case-subtitle">${c.subtitle}</div>
        <div class="case-value">${c.value}</div>
        <span class="case-risk">${c.riskType}</span>
      </div>
    `).join('');

    // Event listeners
    document.querySelectorAll('.case-card').forEach(card => {
      card.addEventListener('click', () => {
        if (isRunning) return;
        selectCase(parseInt(card.dataset.caseId));
      });
    });
  }

  // ============================================================
  // SELECT CASE
  // ============================================================
  function selectCase(caseId) {
    selectedCase = CASES.find(c => c.id === caseId);
    if (!selectedCase) return;

    // Update card selection
    document.querySelectorAll('.case-card').forEach(c => c.classList.remove('selected'));
    document.getElementById(`case-${caseId}`).classList.add('selected');

    // Enable simulate button
    btnSimulate.disabled = false;

    // Render steps
    renderOldSteps();
    renderNewSteps();

    // Update step counts
    document.getElementById('old-step-count').textContent = `${OLD_STEPS.length} pasos`;
    document.getElementById('new-step-count').textContent = `${NEW_STEPS.length} pasos`;

    // Reset results
    oldResultEl.classList.remove('visible');
    newResultEl.classList.remove('visible');
    oldResultEl.innerHTML = '';
    newResultEl.innerHTML = '';
    statsBar.classList.remove('visible');
    btnReset.classList.remove('visible');
    vsDivider.classList.remove('active');
  }

  // ============================================================
  // RENDER OLD PROCEDURE STEPS
  // ============================================================
  function renderOldSteps() {
    oldStepsEl.innerHTML = OLD_STEPS.map((step, i) => {
      const tagHtml = step.tag
        ? `<span class="step-tag">${step.tag}</span>`
        : '';

      return `
        <div class="step-node" id="${step.id}" data-index="${i}">
          <div class="step-indicator">
            <div class="step-dot">${step.code}</div>
            <div class="step-info">
              <div class="step-header">
                <span class="step-title">${step.title}</span>
                ${tagHtml}
              </div>
              <div class="step-desc">${step.desc}</div>
              <div class="step-meta">
                <span class="step-responsible">${step.responsible}</span>
              </div>
              <div class="warning-msg" id="warning-${step.id}">
                <span class="warning-label">⚠️ Riesgo no detectado</span>
                <span class="warning-text"></span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ============================================================
  // RENDER NEW PROCEDURE STEPS
  // ============================================================
  function renderNewSteps() {
    newStepsEl.innerHTML = NEW_STEPS.map((step, i) => {
      const phvaConfig = PHVA_CONFIG[step.phva];
      const controlHtml = step.hasControl
        ? `<span class="step-control-badge">● PUNTO DE CONTROL</span>`
        : '';

      return `
        <div class="step-node" id="${step.id}" data-index="${i}">
          <div class="step-indicator">
            <div class="step-dot">${step.number}</div>
            <div class="step-info">
              <div class="step-header">
                <span class="step-phva" style="color:${phvaConfig.color}; background:${phvaConfig.bg}">${step.phva}</span>
                <span class="step-title">${step.title}</span>
              </div>
              <div class="step-desc">${step.desc}</div>
              <div class="step-meta">
                <span class="step-responsible">${step.responsible}</span>
                <span class="step-time">${step.time}</span>
                ${controlHtml}
              </div>
              <div class="block-msg" id="block-${step.id}">
                <span class="warning-label">🛑 Control activado — Proceso detenido</span>
                <span class="block-text"></span>
                <span class="block-norm"></span>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ============================================================
  // SIMULATE BUTTON
  // ============================================================
  btnSimulate.addEventListener('click', () => {
    if (!selectedCase || isRunning) return;
    startSimulation();
  });

  btnReset.addEventListener('click', () => {
    if (isRunning) return;
    resetSimulation();
  });

  // ============================================================
  // RESET
  // ============================================================
  function resetSimulation() {
    // Re-render steps to clean state
    renderOldSteps();
    renderNewSteps();

    // Hide results
    oldResultEl.classList.remove('visible');
    newResultEl.classList.remove('visible');
    oldResultEl.innerHTML = '';
    newResultEl.innerHTML = '';
    statsBar.classList.remove('visible');
    btnReset.classList.remove('visible');
    vsDivider.classList.remove('active');

    btnSimulate.disabled = false;
    btnSimulate.classList.remove('running');
    btnSimulate.textContent = 'Iniciar Simulación';
  }

  // ============================================================
  // START SIMULATION
  // ============================================================
  async function startSimulation() {
    isRunning = true;
    btnSimulate.disabled = true;
    btnSimulate.classList.add('running');
    btnSimulate.textContent = 'Simulando...';
    vsDivider.classList.add('active');

    // Show loading
    loaderCaseName.textContent = selectedCase.title;
    loadingOverlay.classList.add('visible');

    await sleep(2000);
    loadingOverlay.classList.remove('visible');
    await sleep(400);

    // Run both procedures simultaneously
    const oldPromise = runOldProcedure();
    const newPromise = runNewProcedure();

    await Promise.all([oldPromise, newPromise]);

    // Show results
    await sleep(600);
    showResults();

    isRunning = false;
    btnSimulate.classList.remove('running');
    btnSimulate.textContent = 'Simulación Completada';
    btnReset.classList.add('visible');
  }

  // ============================================================
  // RUN OLD PROCEDURE (fast, everything approves, then warnings)
  // ============================================================
  async function runOldProcedure() {
    const warningIndices = selectedCase.oldWarnings.map(w => w.stepIndex);

    // Phase 1: All steps approve quickly
    for (let i = 0; i < OLD_STEPS.length; i++) {
      const el = document.getElementById(OLD_STEPS[i].id);

      // Processing state
      el.classList.add('processing');
      scrollToElement(el, oldStepsEl);
      await sleep(300);

      // Approved state
      el.classList.remove('processing');
      el.classList.add('approved');
      await sleep(150);
    }

    // Pause before revealing warnings
    await sleep(800);

    // Phase 2: Warnings appear on vulnerable steps
    for (const warning of selectedCase.oldWarnings) {
      const step = OLD_STEPS[warning.stepIndex];
      const el = document.getElementById(step.id);
      const warningMsgEl = document.getElementById(`warning-${step.id}`);

      el.classList.remove('approved');
      el.classList.add('warning');

      warningMsgEl.querySelector('.warning-text').textContent = warning.msg;
      scrollToElement(el, oldStepsEl);
      await sleep(700);
    }
  }

  // ============================================================
  // RUN NEW PROCEDURE (methodical, stops at control point)
  // ============================================================
  async function runNewProcedure() {
    const blockIndex = selectedCase.newBlockIndex;

    for (let i = 0; i < NEW_STEPS.length; i++) {
      const step = NEW_STEPS[i];
      const el = document.getElementById(step.id);

      if (i === blockIndex) {
        // Processing state (longer)
        el.classList.add('processing');
        scrollToElement(el, newStepsEl);
        await sleep(1200);

        // Blocked!
        el.classList.remove('processing');
        el.classList.add('blocked');

        const blockMsgEl = document.getElementById(`block-${step.id}`);
        blockMsgEl.querySelector('.block-text').textContent = selectedCase.newBlockMsg;
        blockMsgEl.querySelector('.block-norm').textContent = `📌 ${selectedCase.newBlockNorm}`;

        scrollToElement(el, newStepsEl);
        await sleep(400);

        // Mark remaining as skipped
        for (let j = i + 1; j < NEW_STEPS.length; j++) {
          const skipEl = document.getElementById(NEW_STEPS[j].id);
          skipEl.classList.add('skipped');
        }

        break;
      }

      // Normal processing
      el.classList.add('processing');
      scrollToElement(el, newStepsEl);
      await sleep(500);

      // Approved
      el.classList.remove('processing');
      el.classList.add('approved');
      await sleep(200);
    }
  }

  // ============================================================
  // SHOW RESULTS
  // ============================================================
  function showResults() {
    // Old procedure result
    const warningCount = selectedCase.oldWarnings.length;
    oldResultEl.innerHTML = `
      <div class="result-box result-danger">
        <div class="result-count">${warningCount}</div>
        <div class="result-title">Riesgos no detectados</div>
        <div class="result-text">
          El procedimiento actual aprobó el contrato de <strong>${selectedCase.value}</strong> 
          sin detectar ${warningCount} punto${warningCount > 1 ? 's' : ''} crítico${warningCount > 1 ? 's' : ''} 
          de riesgo. Tipo: <strong>${selectedCase.riskType}</strong>.
        </div>
      </div>
    `;
    oldResultEl.classList.add('visible');

    // New procedure result
    const blockStep = NEW_STEPS[selectedCase.newBlockIndex];
    newResultEl.innerHTML = `
      <div class="result-box result-warning">
        <div class="result-count">Paso ${blockStep.number}</div>
        <div class="result-title">Proceso detenido correctamente</div>
        <div class="result-text">
          El procedimiento mejorado detuvo el proceso en el paso <strong>${blockStep.number} — ${blockStep.title}</strong>
          antes de comprometer recursos públicos por <strong>${selectedCase.value}</strong>.
        </div>
      </div>
    `;
    newResultEl.classList.add('visible');

    // Stats bar
    document.getElementById('stat-old-steps').textContent = OLD_STEPS.length;
    document.getElementById('stat-new-steps').textContent = NEW_STEPS.length;
    document.getElementById('stat-risks').textContent = warningCount;
    document.getElementById('stat-controls').textContent = NEW_STEPS.filter(s => s.hasControl).length;
    statsBar.classList.add('visible');
  }

  // ============================================================
  // UTILITIES
  // ============================================================
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function scrollToElement(el, container) {
    const elRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (elRect.bottom > containerRect.bottom || elRect.top < containerRect.top) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});
