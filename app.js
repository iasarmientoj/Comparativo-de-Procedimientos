/* ==========================================================================
   PROCEDURE DATA STRUCTURES
   ========================================================================== */

const oldProcedureSteps = [
    {
        letter: "A",
        title: "Identificación de Necesidad y AMP",
        risk: "medium",
        riskScore: 45,
        responsible: "Área Técnica (Dependencia Solicitante)",
        diagnostic: "El área técnica busca en internet el Acuerdo Marco de Precios (AMP) de forma autónoma. No hay participación formal del área de licitaciones ni acompañamiento jurídico en la etapa de planeación.",
        law: "Decreto 1082 de 2015 - Vacío de planeación coordinada."
    },
    {
        letter: "B",
        title: "Verificación de Existencia en SECOP",
        risk: "low",
        riskScore: 20,
        responsible: "Área Técnica",
        diagnostic: "El funcionario de sistemas entra al SECOP a verificar la vigencia. Si asume erróneamente que no existe, la entidad podría quedar libre para contratar directamente, perdiendo el beneficio de la agregación de demanda (como ocurrió recientemente con un caso de combustibles).",
        law: "Ley 1150 de 2007 (Obligatoriedad de uso de AMP)."
    },
    {
        letter: "C",
        title: "Adelantar Tareas de Adquisición en AMP",
        risk: "medium",
        riskScore: 50,
        responsible: "Área Técnica",
        diagnostic: "La dependencia interesada ejecuta las tareas previas de forma aislada, sin doble check de las reglas del catálogo.",
        law: "Decreto 1082 de 2015 - Principio de Selección Objetiva."
    },
    {
        letter: "D",
        title: "Solicitud de Expedición de CDP",
        risk: "low",
        riskScore: 15,
        responsible: "Área Técnica / Presupuesto",
        diagnostic: "Trámite estándar de asignación de presupuesto. Sin riesgos particulares si los rubros están correctos.",
        law: "Estatuto Orgánico de Presupuesto."
    },
    {
        letter: "E",
        title: "Autorización de Creación de Roles",
        risk: "low",
        riskScore: 25,
        responsible: "Ordenador del Gasto",
        diagnostic: "Se aprueban los accesos para la Tienda Virtual en base a la solicitud técnica sin mayores filtros de idoneidad.",
        law: "Decreto 1082 de 2015 (Roles de Comprador)."
    },
    {
        letter: "F",
        title: "Registro en la Tienda Virtual (TVEC)",
        risk: "high",
        riskScore: 75,
        responsible: "Área Técnica (Usuario del Ingeniero)",
        diagnostic: "Toda la administración del evento, el chat, y la carga documental se realiza desde el usuario individual de un solo ingeniero. No hay bitácora ni trazabilidad de accesos cruzados.",
        law: "Principios de transparencia y seguridad de la información."
    },
    {
        letter: "G",
        title: "Búsqueda de Catálogo y Selección",
        risk: "high",
        riskScore: 90,
        responsible: "Área Técnica (Ingeniero Solitario)",
        diagnostic: "El ingeniero analiza las cotizaciones en su propio computador. Negocia o interactúa con proveedores directamente por el chat. No existe comité evaluador, lo que genera riesgos extremos de subjetividad y errores (como omitir el cálculo de IVA en el caso de Nuevo Pangea).",
        law: "Ley 1150 de 2007 (Selección objetiva) y Decreto 1082 (Comités asesores)."
    },
    {
        letter: "H",
        title: "Elaboración de Estudios Previos (Posteriores)",
        risk: "high",
        riskScore: 85,
        responsible: "Área Técnica",
        diagnostic: "PARADOJA LEGAL: El documento se llama 'Estudios Previos', pero en la práctica se elabora y firma DESPUÉS de haber seleccionado al proveedor en la plataforma, con el único fin de justificar la elección. Carece de su naturaleza preventiva.",
        law: "Decreto 1082 de 2015 (Estudios previos obligatorios antes de iniciar el proceso)."
    },
    {
        letter: "I",
        title: "Radicación en Licitaciones",
        risk: "medium",
        riskScore: 60,
        responsible: "Área Técnica",
        diagnostic: "El expediente contractual cerrado se radica en el Grupo de Licitaciones cuando el evento en la plataforma ya finalizó. Si se detecta un error, la única opción es cancelar y deshacer todo.",
        law: "Manual de Contratación del Ministerio."
    },
    {
        letter: "J",
        title: "Informe de Viabilidad Jurídica",
        risk: "medium",
        riskScore: 40,
        responsible: "Grupo de Licitaciones (Abogados)",
        diagnostic: "Los abogados emiten viabilidad basados en los papeles aportados. Generalmente no validan la plataforma en vivo ni verifican inhabilidades de última hora de forma exhaustiva.",
        law: "Responsabilidad civil y disciplinaria de los evaluadores."
    },
    {
        letter: "K",
        title: "Aprobación/Rechazo de la Orden de Compra",
        risk: "high",
        riskScore: 95,
        responsible: "Ordenador del Gasto (Directora)",
        diagnostic: "El ordenador firma basándose en la fe del área técnica. Si el proveedor tiene una inhabilidad sobrevenida registrada horas antes (ej. REDAM o RUES) y no se verificó, el firmante asume la responsabilidad disciplinaria y penal por firmar un contrato nulo.",
        law: "Artículo 44 de la Ley 80 de 1993 (Nulidad absoluta) y Código Penal (Contrato sin cumplimiento de requisitos legales)."
    },
    {
        letter: "L",
        title: "Registro Presupuestal (RP)",
        risk: "low",
        riskScore: 10,
        responsible: "Subdirección Financiera",
        diagnostic: "Afectación de la apropiación presupuestal. Proceso meramente contable.",
        law: "Estatuto Orgánico de Presupuesto."
    },
    {
        letter: "M",
        title: "Designación de Supervisión",
        risk: "low",
        riskScore: 20,
        responsible: "Grupo de Licitaciones",
        diagnostic: "Se firma la resolución de supervisión una vez el contrato está legalizado.",
        law: "Ley 1474 de 2011 (Estatuto Anticorrupción)."
    },
    {
        letter: "N",
        title: "Remisión de Soportes al Supervisor",
        risk: "low",
        riskScore: 15,
        responsible: "Grupo de Licitaciones",
        diagnostic: "Entrega de documentos físicos/digitales para iniciar la ejecución.",
        law: "Ley 1474 de 2011."
    }
];

const newProcedureSteps = [
    {
        num: 1,
        phase: "P",
        title: "Recibir, radicar y asignar trámite",
        responsible: "Auxiliar y Coordinador de Contratos",
        desc: "Ingreso de la solicitud de necesidad técnica por radicación. El coordinador asigna formalmente un abogado responsable desde el primer día.",
        control: null,
        regs: "Estudios previos iniciales, simulador del AMP, certificado de CDP, solicitud oficial."
    },
    {
        num: 2,
        phase: "V",
        title: "Analizar estudios y documentos previos",
        responsible: "Abogados del Grupo de Contratos y Coordinador",
        desc: "El abogado responsable analiza el anexo técnico, el simulador del AMP y la justificación. Si detecta inconsistencias o vigencias erróneas en cantidades, devuelve el proceso inmediatamente antes de abrir el evento.",
        control: "Control Riesgo: Validación jurídica previa. Tiempo límite: 2 días.",
        regs: "Comunicación de devolución o aprobación del estudio previo definitivo."
    },
    {
        num: 3,
        phase: "H",
        title: "Configurar el evento RFI",
        responsible: "Abogado y Apoyo Técnico de Contratos",
        desc: "Cuando el Acuerdo Marco lo exija como obligatorio, se publica la Solicitud de Información (RFI) en la Tienda Virtual (TVEC).",
        control: null,
        regs: "Ficha RFI en plataforma TVEC."
    },
    {
        num: 4,
        phase: "V",
        title: "Revisión de observaciones al RFI",
        responsible: "Director del Área Técnica y equipo",
        desc: "El apoyo técnico recopila las consultas de los proveedores registrados y las remite al área técnica para su evaluación técnica.",
        control: null,
        regs: "Correo electrónico, registro de descargue de observaciones."
    },
    {
        num: 5,
        phase: "V",
        title: "Analizar limitación a MIPYMES",
        responsible: "Abogado y Coordinador del Grupo de Contratos",
        desc: "Verificación de cumplimiento de requisitos del Decreto 1860 de 2021 ante solicitudes de limitación a micro, pequeñas y medianas empresas.",
        control: "Control Riesgo: Comprobación de solicitudes del RUES y cumplimiento del límite legal.",
        regs: "Documento de análisis de limitación en TVEC."
    },
    {
        num: 6,
        phase: "H",
        title: "Publicar aviso de limitación a MIPYMES",
        responsible: "Abogado y Coordinador del Grupo de Contratos",
        desc: "Publicación formal de la decisión de limitar o no el proceso en la cartelera de mensajes del RFI en TVEC.",
        control: null,
        regs: "Aviso publicado en plataforma TVEC."
    },
    {
        num: 7,
        phase: "V",
        title: "Respuesta formal a observaciones RFI",
        responsible: "Director del Área Técnica y equipo",
        desc: "Se emite el análisis técnico de las respuestas del RFI y se realizan los ajustes correspondientes en los pliegos y simulador definitivo.",
        control: "Control Riesgo: Validación de modificaciones presupuestales derivadas de observaciones.",
        regs: "Respuestas técnicas cargadas y estudios previos definitivos."
    },
    {
        num: 8,
        phase: "H",
        title: "Configurar evento de cotización (RFQ)",
        responsible: "Abogado, Apoyo Técnico y Área Técnica",
        desc: "Publicación oficial de la solicitud de cotización (RFQ) en la Tienda Virtual en presencia del área técnica para evitar errores de cargue.",
        control: null,
        regs: "Evento de cotización publicado en TVEC."
    },
    {
        num: 9,
        phase: "V",
        title: "Analizar observaciones al RFQ",
        responsible: "Abogado (Jurídica) y Área Técnica (Técnico-Económica)",
        desc: "Se evalúan de forma coordinada las observaciones presentadas al evento de cotización definitiva.",
        control: "Control Riesgo: Clasificación legal y técnica de consultas para evitar favorecimiento.",
        regs: "Respuestas de mensajes en TVEC, cuadernillo de observaciones."
    },
    {
        num: 10,
        phase: "H",
        title: "Publicar cuadernillo de observaciones",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Publicación del documento consolidado de respuestas a observaciones en el evento de cotización.",
        control: null,
        regs: "Cuadernillo publicado en la TVEC."
    },
    {
        num: 11,
        phase: "H",
        title: "Designación del Comité Asesor y Evaluador",
        responsible: "Ordenador del Gasto (Directora)",
        desc: "Resolución o memorando de designación formal del comité evaluador, conformado obligatoriamente por un abogado de contratos, un técnico y un financiero.",
        control: null,
        regs: "Comunicación oficial de conformación de comité."
    },
    {
        num: 12,
        phase: "V",
        title: "Analizar cotizaciones recibidas",
        responsible: "Comité Asesor y Evaluador",
        desc: "Apertura pública de ofertas tras los 5 días de ley. El comité revisa los precios de menor a mayor y activa criterios de desempate de la Ley 2069 de 2020.",
        control: null,
        regs: "Acta de apertura y listado automático de cotizaciones en TVEC."
    },
    {
        num: 13,
        phase: "V",
        title: "Evaluar requisitos técnicos, económicos y jurídicos",
        responsible: "Comité Asesor y Evaluador",
        desc: "El abogado evalúa la personería y realiza consultas de inhabilidades en tiempo real (REDAM, Contraloría, Policía). El área técnica valida el cumplimiento de las fichas del AMP y analiza la viabilidad económica (evaluación de ofertas artificialmente bajas).",
        control: "Control Riesgo: Doble validación. Filtro de deudores alimentarios (REDAM), certificado RUES y análisis de estructura de costos.",
        regs: "Verificaciones oficiales impresas con fecha y hora del día de la evaluación."
    },
    {
        num: 14,
        phase: "H",
        title: "Consolidar y publicar Informe de Evaluación",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Cargue del informe de evaluación de la oferta de menor costo en la plataforma TVEC, otorgando un plazo mínimo de 1 día hábil para observaciones de proponentes.",
        control: null,
        regs: "Informe de evaluación publicado en la TVEC."
    },
    {
        num: 15,
        phase: "V",
        title: "Analizar observaciones al informe de evaluación",
        responsible: "Comité Asesor y Evaluador",
        desc: "Análisis técnico y jurídico de las observaciones presentadas por los competidores al informe publicado.",
        control: "Control Riesgo: Evaluación colegiada para blindar la decisión de adjudicación o descarte.",
        regs: "Cuadernillo de observaciones al informe de evaluación."
    },
    {
        num: 16,
        phase: "H",
        title: "Publicar informe final de evaluación",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Cargue de las respuestas a proponentes y del acta definitiva de selección de la oferta ganadora.",
        control: null,
        regs: "Informe final en TVEC."
    },
    {
        num: 17,
        phase: "H",
        title: "Configurar Orden de Compra",
        responsible: "Abogado y Apoyo Técnico de Contratos",
        desc: "Se parametrizan las cantidades y los ítems ganadores en el formulario de Orden de Compra en la TVEC.",
        control: null,
        regs: "Borrador de la Orden de Compra en la TVEC."
    },
    {
        num: 18,
        phase: "H",
        title: "Suscripción electrónica de la Orden de Compra",
        responsible: "Coordinador de Contratos y Ordenador del Gasto",
        desc: "Aprobación jerárquica en plataforma por el coordinador de contratos y posterior firma electrónica de la Directora.",
        control: "Control Riesgo: Verificación final de firmas electrónicas autorizadas en TVEC.",
        regs: "Orden de Compra suscrita digitalmente."
    },
    {
        num: 19,
        phase: "H",
        title: "Publicación de Orden de Compra o Declaratoria",
        responsible: "Abogado y Apoyo Técnico de Contratos",
        desc: "Envío del documento a través de la plataforma al proveedor seleccionado. En caso de desierto, se publica el Acto Administrativo.",
        control: null,
        regs: "Orden de Compra publicada y enviada al proveedor."
    },
    {
        num: 20,
        phase: "H",
        title: "Remitir para RP y requerir garantías",
        responsible: "Abogado y Apoyo Técnico",
        desc: "Se traslada la orden de compra a presupuesto para el Registro Presupuestal y se notifica al contratista para la radicación del seguro/garantías.",
        control: null,
        regs: "Oficios de requerimiento y traslados internos."
    },
    {
        num: 21,
        phase: "V",
        title: "Revisión y aprobación de garantías",
        responsible: "Abogado y Coordinador del Grupo de Contratos",
        desc: "Validación de la póliza de seguros frente a los amparos del AMP. Emisión del certificado formal de aprobación.",
        control: "Control Riesgo: Validación de suficiencia de coberturas y vigencia de amparos.",
        regs: "Certificado de aprobación de garantías en la TVEC."
    },
    {
        num: 22,
        phase: "H",
        title: "Emitir el Registro Presupuestal",
        responsible: "Grupo de Presupuesto",
        desc: "Generación del RP en el sistema SIIF Nación, vinculando la orden de compra al presupuesto anual.",
        control: "Control Riesgo: Verificación de coincidencia exacta de valores y NIT del proveedor.",
        regs: "Registro Presupuestal definitivo."
    },
    {
        num: 23,
        phase: "H",
        title: "Notificación al Supervisor del contrato",
        responsible: "Coordinador del Grupo de Contratos",
        desc: "Notificación formal de designación de supervisión al funcionario del área técnica.",
        control: null,
        regs: "Comunicación oficial de supervisión."
    },
    {
        num: 24,
        phase: "H",
        title: "Alimentar plataforma interna de supervisión",
        responsible: "Auxiliar Administrativo de Contratos",
        desc: "Cargue de todos los soportes documentales del proceso al gestor documental interno.",
        control: null,
        regs: "Expediente digital completo indexado."
    },
    {
        num: 25,
        phase: "H",
        title: "Publicar legalización final en TVEC",
        responsible: "Abogado y Apoyo Técnico",
        desc: "Cargue del RP, pólizas aprobadas y acta de designación de supervisión al módulo de documentos adicionales de la TVEC.",
        control: null,
        regs: "Publicación en el módulo de documentos adicionales en la TVEC."
    }
];

/* ==========================================================================
   DOM INITIALIZATION & EVENTS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderOldProcedure();
    renderNewProcedure();
    loadScenarioInfo();
    
    // Hash routing for tabs
    const handleHash = () => {
        const hash = window.location.hash;
        if (hash === "#actual" || hash === "#viejo") {
            switchTab("actual");
        } else if (hash === "#mejorado" || hash === "#nuevo") {
            switchTab("mejorado");
        } else if (hash === "#simulador") {
            switchTab("simulador");
        }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
});

/* Tab Switching Logic */
function switchTab(tabName) {
    // Buttons
    document.getElementById("tabBtnActual").classList.remove("active");
    document.getElementById("tabBtnMejorado").classList.remove("active");
    document.getElementById("tabBtnSimulador").classList.remove("active");
    
    // Panels
    document.getElementById("panelActual").classList.remove("active");
    document.getElementById("panelMejorado").classList.remove("active");
    document.getElementById("panelSimulador").classList.remove("active");
    
    if (tabName === "actual") {
        document.getElementById("tabBtnActual").classList.add("active");
        document.getElementById("panelActual").classList.add("active");
    } else if (tabName === "mejorado") {
        document.getElementById("tabBtnMejorado").classList.add("active");
        document.getElementById("panelMejorado").classList.add("active");
    } else if (tabName === "simulador") {
        document.getElementById("tabBtnSimulador").classList.add("active");
        document.getElementById("panelSimulador").classList.add("active");
    }
}

/* ==========================================================================
   RENDER OLD PROCEDURE
   ========================================================================== */
function renderOldProcedure() {
    const container = document.getElementById("oldFlowNodes");
    container.innerHTML = "";
    
    oldProcedureSteps.forEach((step, index) => {
        const item = document.createElement("div");
        item.className = `flow-node-item risk-${step.risk}`;
        item.setAttribute("onclick", `selectOldStep(${index})`);
        
        let riskIcon = "";
        if (step.risk === "high") {
            riskIcon = '<i class="fa-solid fa-triangle-exclamation node-icon-alert" title="Riesgo Crítico"></i>';
        } else if (step.risk === "medium") {
            riskIcon = '<i class="fa-solid fa-circle-exclamation node-icon-warning" title="Riesgo Medio"></i>';
        }
        
        item.innerHTML = `
            <span class="node-letter">${step.letter}</span>
            <div class="node-title-box">
                <h5>${step.title}</h5>
                <span>Responsable: ${step.responsible}</span>
            </div>
            <div class="node-meta">
                ${riskIcon}
            </div>
        `;
        container.appendChild(item);
    });
}

function selectOldStep(index) {
    const steps = document.querySelectorAll("#oldFlowNodes .flow-node-item");
    steps.forEach((el, i) => {
        if (i === index) el.classList.add("selected");
        else el.classList.remove("selected");
    });
    
    const step = oldProcedureSteps[index];
    
    document.getElementById("oldSidebarPlaceholder").classList.add("hidden");
    const content = document.getElementById("oldSidebarContent");
    content.classList.remove("hidden");
    
    document.getElementById("oldStepLetter").innerText = step.letter;
    document.getElementById("oldStepLetter").className = `step-letter risk-${step.risk}`;
    // Dynamic color for step letter box
    if (step.risk === 'high') document.getElementById("oldStepLetter").style.backgroundColor = 'var(--red)';
    else if (step.risk === 'medium') document.getElementById("oldStepLetter").style.backgroundColor = 'var(--yellow)';
    else document.getElementById("oldStepLetter").style.backgroundColor = 'var(--blue)';
    
    document.getElementById("oldStepTitle").innerText = step.title;
    document.getElementById("oldStepResp").innerText = step.responsible;
    document.getElementById("oldStepDiag").innerText = step.diagnostic;
    document.getElementById("oldStepLaw").innerText = step.law;
    
    // Risk fill
    const riskFill = document.getElementById("oldStepRiskFill");
    riskFill.style.width = `${step.riskScore}%`;
    riskFill.className = `risk-fill ${step.risk === 'high' ? 'red' : 'yellow'}`;
    
    const riskLabel = document.getElementById("oldStepRiskLabel");
    riskLabel.innerText = `${step.riskScore}% - ${step.risk === 'high' ? 'Crítico' : step.risk === 'medium' ? 'Moderado' : 'Bajo'}`;
    riskLabel.className = `risk-label ${step.risk === 'high' ? 'red' : 'yellow'}`;
}

/* ==========================================================================
   RENDER NEW PROCEDURE
   ========================================================================== */
function renderNewProcedure() {
    const container = document.getElementById("newStepsGrid");
    container.innerHTML = "";
    
    newProcedureSteps.forEach((step, index) => {
        const card = document.createElement("div");
        card.className = "new-step-card";
        card.setAttribute("data-phase", step.phase);
        card.setAttribute("onclick", `selectNewStep(${index})`);
        
        let controlBadge = "";
        if (step.control) {
            controlBadge = '<i class="fa-solid fa-shield-halved control-indicator" title="Punto de Control Obligatorio"></i>';
        }
        
        card.innerHTML = `
            <div class="new-card-top">
                <span class="card-num">Actividad ${step.num}</span>
                <span class="phva-dot ${step.phase}"></span>
            </div>
            <h5>${step.title}</h5>
            <div class="new-card-bot">
                <span>${step.phase === 'P' ? 'Planear' : step.phase === 'H' ? 'Hacer' : step.phase === 'V' ? 'Verificar' : 'Actuar'}</span>
                ${controlBadge}
            </div>
        `;
        container.appendChild(card);
    });
}

function selectNewStep(index) {
    const cards = document.querySelectorAll("#newStepsGrid .new-step-card");
    cards.forEach((el, i) => {
        if (i === index) el.classList.add("selected");
        else el.classList.remove("selected");
    });
    
    const step = newProcedureSteps[index];
    
    document.getElementById("newSidebarPlaceholder").classList.add("hidden");
    const content = document.getElementById("newSidebarContent");
    content.classList.remove("hidden");
    
    document.getElementById("newStepNum").innerText = step.num;
    document.getElementById("newStepTitle").innerText = step.title;
    document.getElementById("newStepResp").innerText = step.responsible;
    document.getElementById("newStepDesc").innerText = step.desc;
    document.getElementById("newStepRegs").innerText = step.regs;
    
    const phvaBadge = document.getElementById("newStepPhva");
    phvaBadge.innerText = step.phase === 'P' ? 'Planear' : step.phase === 'H' ? 'Hacer' : step.phase === 'V' ? 'Verificar' : 'Actuar';
    phvaBadge.className = `phva-badge ${step.phase}`;
    
    const controlBox = document.getElementById("newStepControlBox");
    if (step.control) {
        controlBox.classList.remove("hidden");
        document.getElementById("newStepControl").innerText = step.control;
    } else {
        controlBox.classList.add("hidden");
    }
}

function filterNewSteps(phase) {
    // Filter buttons
    const filterBtns = document.querySelectorAll(".phva-filters .filter-btn");
    filterBtns.forEach(btn => {
        if (btn.innerText.includes(phase) || (phase === 'all' && btn.innerText === 'Todos')) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    const cards = document.querySelectorAll("#newStepsGrid .new-step-card");
    cards.forEach(card => {
        if (phase === 'all' || card.getAttribute("data-phase") === phase) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
}

/* ==========================================================================
   STRESS SIMULATOR
   ========================================================================== */

const scenarios = {
    iva: {
        title: "Caso Nuevo Pangea (IVA omitido)",
        description: "El proponente menor **Nuevo Pangea** cotiza en la Tienda Virtual dejando la celda de IVA en **0 (cero)** alegando una exención técnica de computación en la nube. Su cotización es 300 millones de COP menor que las demás.",
        oldPath: [
            { lbl: "Planeación", status: "done", desc: "El ingeniero define el valor basándose en el simulador sin asesoría legal." },
            { lbl: "RFQ Catálogo", status: "done", desc: "El ingeniero publica el RFQ desde su cuenta personal." },
            { lbl: "Evaluación", status: "done", desc: "El ingeniero ve que la oferta de Nuevo Pangea es la de menor precio. Sin comités, asume que la exención de IVA en la plataforma es válida y decide avanzar." },
            { lbl: "Firma OC", status: "done", desc: "La Directora firma el contrato amparada en la fe técnica del ingeniero." },
            { lbl: "Ejecución", status: "failed", desc: "La DIAN y la Contraloría realizan auditoría. Se demuestra que los servicios no eran computación en la nube sino arrendamiento de software gravado. Se declara **Nulidad Absoluta** del contrato, se ordena reintegrar los valores y se abre pliego de cargos disciplinarios y fiscales contra el ordenador del gasto por falta de verificación del IVA." }
        ],
        newPath: [
            { lbl: "Planeación", status: "done", desc: "El Grupo de Contratos revisa el simulador y define la exención de IVA de forma explícita en los pliegos definitivos." },
            { lbl: "RFQ Catálogo", status: "done", desc: "Se abre el RFQ con supervisión legal y respuestas unificadas." },
            { lbl: "Comité", status: "stopped", desc: "El **Comité Evaluador** (abogado de contratos y técnico) analiza la oferta de Nuevo Pangea. El abogado de contratos exige la justificación y se remite a la DIAN. Al no cumplir con las circulares de exención, se descarta formalmente y se adjudica a la segunda mejor oferta (MSL) que sí contenía el IVA. **Riesgo Fiscal Evitado.**" },
            { lbl: "Firma OC", status: "done", desc: "Se firma la orden de compra con el proponente idóneo." },
            { lbl: "Ejecución", status: "done", desc: "Ejecución exitosa y blindada frente a auditorías fiscales." }
        ]
    },
    inhabilidad: {
        title: "Inhabilidad Sobrevenida del Representante Legal",
        description: "Un día antes de la adjudicación, un juez de familia registra una inhabilidad por deudas de alimentos (REDAM) contra el Representante Legal de la empresa con la cotización más baja.",
        oldPath: [
            { lbl: "Planeación", status: "done", desc: "El proceso avanza sin inconvenientes iniciales." },
            { lbl: "RFQ Catálogo", status: "done", desc: "Se reciben cotizaciones." },
            { lbl: "Evaluación", status: "done", desc: "El ingeniero comprueba que la empresa está en la Tienda Virtual y asume que Colombia Compra Eficiente valida a sus proveedores." },
            { lbl: "Firma OC", status: "done", desc: "La Directora firma electrónicamente la orden de compra." },
            { lbl: "Ejecución", status: "failed", desc: "Se denuncia que el representante legal estaba inhabilitado según la Ley de Alimentos. El contrato se cae, se pierden los recursos invertidos y se inicia juicio disciplinario con sanción de **Destitución de Cargo Público** para el Ordenador del Gasto." }
        ],
        newPath: [
            { lbl: "Planeación", status: "done", desc: "Planeación regular." },
            { lbl: "RFQ Catálogo", status: "done", desc: "Publicación de RFQ." },
            { lbl: "Comité", status: "stopped", desc: "En el Paso 13, el **Abogado de Contratos** del comité evaluador realiza la consulta obligatoria en la base de datos de deudores alimentarios (REDAM) y el RUES. Se detecta la inhabilidad en el acto, se descarta al proponente y se adjudica al segundo. **Riesgo Legal Mitigado.**" },
            { lbl: "Firma OC", status: "done", desc: "El ordenador firma el contrato con plena seguridad jurídica." },
            { lbl: "Ejecución", status: "done", desc: "Ejecución blindada y transparente." }
        ]
    },
    cambio: {
        title: "Error en Vigencia del Licenciamiento",
        description: "En el simulador se cotizó el soporte por 2 años, pero el anexo del RFQ se configuró erróneamente por 1 año en cantidades. Los proveedores envían cotizaciones inconsistentes.",
        oldPath: [
            { lbl: "Planeación", status: "done", desc: "Se radica con inconsistencias de vigencia." },
            { lbl: "RFQ Catálogo", status: "done", desc: "Se publica el RFQ." },
            { lbl: "Evaluación", status: "failed", desc: "Al recibir observaciones del error, el ingeniero cancela el evento de cotización directamente en la Tienda Virtual para corregir. El proveedor de menor valor interpone demanda por violación de la minuta contractual de AMP (que exige una resolución de cancelación formal). La entidad se ve obligada a pagar indemnizaciones." },
            { lbl: "Firma OC", status: "done", desc: "Contrato firmado con retrasos extremos y demandas activas." },
            { lbl: "Ejecución", status: "done", desc: "Ejecución afectada por sobrecostos judiciales." }
        ],
        newPath: [
            { lbl: "Planeación", status: "stopped", desc: "En el Paso 2, el **Abogado del Grupo de Contratos** audita el simulador y el anexo técnico antes de iniciar. Encuentra la inconsistencia de los 2 años vs 1 año y devuelve el proceso para corrección antes de publicar el evento. **Error Corregido en Planeación.**" },
            { lbl: "RFQ Catálogo", status: "done", desc: "Se publica el RFQ correcto y saneado." },
            { lbl: "Comité", status: "done", desc: "Evaluación exitosa sobre cotizaciones coherentes." },
            { lbl: "Firma OC", status: "done", desc: "Firma sin demoras." },
            { lbl: "Ejecución", status: "done", desc: "Contrato ejecutado a término." }
        ]
    }
};

function loadScenarioInfo() {
    const sel = document.getElementById("simulationScenario").value;
    const scenario = scenarios[sel];
    
    document.getElementById("scenarioDesc").innerHTML = `
        <h5><strong>${scenario.title}</strong></h5>
        <p style="margin-top: 8px; font-size: 0.85rem; line-height: 1.5;">${scenario.description}</p>
    `;
    
    // Clear visualization viewport
    document.getElementById("simStageIndicator").innerText = "Listo para iniciar simulación.";
    document.getElementById("visualProgressFill").style.width = "0%";
    document.getElementById("visualNodesRow").innerHTML = "";
    document.getElementById("simResultBox").classList.add("hidden");
}

let simInterval = null;

function runSimulation(procType) {
    if (simInterval) clearInterval(simInterval);
    
    const sel = document.getElementById("simulationScenario").value;
    const scenario = scenarios[sel];
    const path = procType === 'old' ? scenario.oldPath : scenario.newPath;
    
    const nodesRow = document.getElementById("visualNodesRow");
    nodesRow.innerHTML = "";
    
    // Draw visual nodes
    path.forEach((pNode, index) => {
        const nodeDiv = document.createElement("div");
        nodeDiv.className = "sim-node";
        nodeDiv.setAttribute("data-lbl", pNode.lbl);
        nodeDiv.id = `simNode_${index}`;
        nodesRow.appendChild(nodeDiv);
    });
    
    document.getElementById("simResultBox").classList.add("hidden");
    
    let currentStep = 0;
    const progressFill = document.getElementById("visualProgressFill");
    
    // Step-by-step animation
    simInterval = setInterval(() => {
        if (currentStep < path.length) {
            const stepInfo = path[currentStep];
            document.getElementById("simStageIndicator").innerText = `Etapa: ${stepInfo.lbl} - ${stepInfo.desc}`;
            
            // Update progress bar
            const percent = ((currentStep + 1) / path.length) * 100;
            progressFill.style.width = `${percent}%`;
            
            // Activate current node
            const node = document.getElementById(`simNode_${currentStep}`);
            if (node) {
                node.classList.add("active");
                if (currentStep > 0) {
                    const prevNode = document.getElementById(`simNode_${currentStep - 1}`);
                    if (prevNode) {
                        prevNode.classList.remove("active");
                        prevNode.classList.add("done");
                    }
                }
                
                // If this is the terminal step for the simulation path
                if (stepInfo.status === "failed") {
                    node.classList.add("failed");
                } else if (stepInfo.status === "stopped") {
                    node.classList.add("stopped");
                }
            }
            
            // If the process fails or is successfully stopped, break the cycle early
            if (stepInfo.status === "failed" || stepInfo.status === "stopped") {
                clearInterval(simInterval);
                showSimulationResult(procType, stepInfo);
                return;
            }
            
            currentStep++;
        } else {
            clearInterval(simInterval);
            // Finished successfully all path
            showSimulationResult(procType, path[path.length - 1]);
        }
    }, 1500);
}

function showSimulationResult(procType, stepInfo) {
    const resultBox = document.getElementById("simResultBox");
    const resultTitle = document.getElementById("simResultTitle");
    const resultText = document.getElementById("simResultText");
    const resultIcon = document.getElementById("simResultIcon");
    
    resultBox.classList.remove("hidden");
    
    if (stepInfo.status === "failed") {
        resultBox.className = "sim-result-box danger";
        resultTitle.innerText = "Simulación Fallida: Alerta Contractual";
        resultText.innerHTML = `<strong>Resultado del Procedimiento Viejo:</strong> ${stepInfo.desc}`;
        resultIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    } else if (stepInfo.status === "stopped") {
        resultBox.className = "sim-result-box success";
        resultTitle.innerText = "Simulación Exitosa: Control Activado";
        resultText.innerHTML = `<strong>Resultado del Procedimiento Nuevo:</strong> ${stepInfo.desc}`;
        resultIcon.innerHTML = '<i class="fa-solid fa-shield-halved"></i>';
    } else {
        resultBox.className = "sim-result-box success";
        resultTitle.innerText = "Simulación Exitosa: Contrato Culminado";
        resultText.innerHTML = `<strong>Contrato Perfeccionado:</strong> El contrato finaliza con firma digital segura y sin sanciones fiscales.`;
        resultIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    }
}

/* ==========================================================================
   PRE-AUDITOR DE PLIEGOS (IA & LOCAL FALLBACK)
   ========================================================================== */

function handleFileDrop(e) {
    e.preventDefault();
    document.getElementById("dropZone").classList.remove("dragover");
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        readFileContent(files[0]);
    }
}

function handleFileSelect(e) {
    const files = e.target.files;
    if (files.length > 0) {
        readFileContent(files[0]);
    }
}

// Drag over style toggling
document.getElementById("dropZone").addEventListener("dragover", () => {
    document.getElementById("dropZone").classList.add("dragover");
});
document.getElementById("dropZone").addEventListener("dragleave", () => {
    document.getElementById("dropZone").classList.remove("dragover");
});

function readFileContent(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById("pasteText").value = e.target.result;
    };
    reader.readAsText(file);
}

/* Document audit trigger */
async function runDocumentAudit() {
    const text = document.getElementById("pasteText").value.trim();
    if (!text) {
        alert("Por favor, sube un archivo o pega el texto de un estudio previo para auditar.");
        return;
    }
    
    const apiKey = document.getElementById("geminiKey").value.trim();
    
    // UI state: Loading
    document.getElementById("auditLoadingBox").classList.remove("hidden");
    document.getElementById("auditResultsBox").classList.add("hidden");
    
    if (apiKey) {
        await runLiveGeminiAudit(text, apiKey);
    } else {
        // Fallback simulated regex audit after 2 seconds
        setTimeout(() => {
            runLocalRegexAudit(text);
        }, 2000);
    }
}

/* Local fallback regex keyword matcher */
function runLocalRegexAudit(text) {
    document.getElementById("auditLoadingBox").classList.add("hidden");
    document.getElementById("auditResultsBox").classList.remove("hidden");
    
    const findings = [];
    let score = 0;
    
    // Check 1: Matriz de Riesgos
    const risksRegex = /riesgo|matriz|vulnerabilidad/gi;
    const hasRisks = risksRegex.test(text);
    if (hasRisks) {
        score += 25;
        findings.push({
            status: "pass",
            title: "Matriz de Riesgos Mencionada",
            desc: "Se identificaron términos relacionados a la matriz de riesgos dentro de la planeación, cumpliendo con la estructura básica del Decreto 1082."
        });
    } else {
        findings.push({
            status: "fail",
            title: "Matriz de Riesgos Ausente",
            desc: "Crítico: No se detectaron secciones que detallen la distribución del riesgo contractual. El pliego incumple los lineamientos de Colombia Compra Eficiente."
        });
    }
    
    // Check 2: Decreto 1082 / Normativa
    const decreeRegex = /1082|decreto 1082/gi;
    const hasDecree = decreeRegex.test(text);
    if (hasDecree) {
        score += 25;
        findings.push({
            status: "pass",
            title: "Referencia Normativa del Decreto 1082",
            desc: "El documento se enmarca adecuadamente bajo la reglamentación del sector administrativo de contratación pública de Colombia."
        });
    } else {
        findings.push({
            status: "warn",
            title: "Omisión de Referencia al Decreto 1082",
            desc: "Advertencia: El documento no invoca de forma explícita el Decreto Único Reglamentario 1082 de 2015, lo que debilita el marco jurídico rector."
        });
    }
    
    // Check 3: Garantías
    const insuranceRegex = /garantía|garantias|seguro|poliza/gi;
    const hasInsurance = insuranceRegex.test(text);
    if (hasInsurance) {
        score += 25;
        findings.push({
            status: "pass",
            title: "Estructura de Garantías y Amparos",
            desc: "Se especifica la exigencia de amparos para proteger los recursos y el patrimonio público ante incumplimientos."
        });
    } else {
        findings.push({
            status: "fail",
            title: "Garantías No Parametrizadas",
            desc: "Crítico: Ausencia de solicitud de pólizas de cumplimiento o amparos de responsabilidad civil extracontractual."
        });
    }
    
    // Check 4: RFI / Estudio del Mercado
    const mktRegex = /rfi|mercado|consulta|cotización/gi;
    const hasMkt = mktRegex.test(text);
    if (hasMkt) {
        score += 25;
        findings.push({
            status: "pass",
            title: "Estudio del Mercado y Consulta Previa",
            desc: "Se hace mención a la verificación del mercado, cotizaciones previas o eventos de información RFI."
        });
    } else {
        findings.push({
            status: "warn",
            title: "Falta de Trazabilidad en Estudio de Mercado",
            desc: "Advertencia: No se evidencia un RFI o sondeo estructurado del catálogo de proveedores del Acuerdo Marco."
        });
    }
    
    renderAuditResults(score, findings);
}

/* Live API call to Gemini */
async function runLiveGeminiAudit(text, apiKey) {
    const prompt = `
    Actúas como un auditor jurídico senior experto en contratación pública en Colombia (Leyes 80/1150 y Decreto 1082 de 2015).
    Analiza el siguiente texto extraído de un pliego de condiciones o estudio previo de contratación.
    Identifica si cumple con los requerimientos de la ley.
    Debes retornar OBLIGATORIAMENTE un objeto JSON válido con la siguiente estructura:
    {
      "score": <número entero entre 0 y 100 de blindaje normativo>,
      "findings": [
        {
          "status": "pass" | "warn" | "fail",
          "title": "<título corto del hallazgo>",
          "description": "<explicación corta en español de lo que cumple o incumple referenciando la ley>"
        }
      ]
    }
    No agregues introducciones, explicaciones externas ni bloques de código de marcado markdown. Devuelve SOLO el texto plano JSON.
    
    Texto a analizar:
    """
    ${text.substring(0, 10000)}
    """
    `;
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    responseMimeType: "application/json"
                }
            })
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const jsonText = data.candidates[0].content.parts[0].text;
        const result = JSON.parse(jsonText);
        
        document.getElementById("auditLoadingBox").classList.add("hidden");
        document.getElementById("auditResultsBox").classList.remove("hidden");
        
        renderAuditResults(result.score, result.findings);
        
    } catch (err) {
        console.error("Gemini API Error:", err);
        document.getElementById("auditLoadingText").innerText = "Error con la API de Gemini. Ejecutando auditoría local de respaldo...";
        setTimeout(() => {
            runLocalRegexAudit(text);
        }, 1500);
    }
}

/* Render results UI */
function renderAuditResults(score, findings) {
    // Score circle styling
    const radial = document.getElementById("radialProgress");
    const scoreText = document.getElementById("scorePercent");
    const chart = radial.parentElement;
    
    scoreText.innerText = `${score}%`;
    radial.setAttribute("stroke-dasharray", `${score}, 100`);
    
    // Class coloring based on score
    if (score >= 75) {
        chart.setAttribute("class", "circular-chart green");
    } else if (score >= 45) {
        chart.setAttribute("class", "circular-chart yellow");
    } else {
        chart.setAttribute("class", "circular-chart red");
    }
    
    // Inject checklist bullet results
    const checklist = document.getElementById("checklistResults");
    checklist.innerHTML = "";
    
    findings.forEach(item => {
        const checkItem = document.createElement("div");
        checkItem.className = `check-item ${item.status}`;
        
        let icon = "";
        if (item.status === "pass") icon = '<i class="fa-solid fa-circle-check"></i>';
        else if (item.status === "warn") icon = '<i class="fa-solid fa-circle-exclamation"></i>';
        else icon = '<i class="fa-solid fa-circle-xmark"></i>';
        
        checkItem.innerHTML = `
            <div class="check-icon-wrap">${icon}</div>
            <div class="check-content-wrap">
                <h6>${item.title}</h6>
                <p>${item.description}</p>
            </div>
        `;
        checklist.appendChild(checkItem);
    });
}
