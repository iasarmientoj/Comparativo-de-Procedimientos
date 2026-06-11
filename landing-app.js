/* ==========================================================================
   LANDING PAGE JAVASCRIPT - CORE LOGIC
   ========================================================================== */

/* Data: Procedimiento Viejo (a-n) */
const oldProcedureSteps = [
    {
        letter: "A",
        title: "Identificación de Necesidad y AMP",
        risk: "medium",
        riskScore: 45,
        responsible: "Área Técnica (Dependencia Solicitante)",
        diagnostic: "El área técnica busca en internet el Acuerdo Marco de Precios (AMP) de forma autónoma. No hay acompañamiento jurídico ni coordinación en la planeación.",
        law: "Decreto 1082 de 2015 - Vacío de planeación integral."
    },
    {
        letter: "B",
        title: "Verificación de Existencia en SECOP",
        risk: "low",
        riskScore: 20,
        responsible: "Área Técnica",
        diagnostic: "El funcionario técnico verifica vigencias en SECOP de forma individual. Si asume erróneamente que no existe Acuerdo, se contrata libremente perdiendo economías de escala.",
        law: "Ley 1150 de 2007 (Obligatoriedad de uso de AMP)."
    },
    {
        letter: "C",
        title: "Adelantar Tareas de Adquisición en AMP",
        risk: "medium",
        riskScore: 55,
        responsible: "Área Técnica",
        diagnostic: "La dependencia realiza la estructuración y simulación sola, sin validación técnica cruzada.",
        law: "Decreto 1082 de 2015 - Principio de Selección Objetiva."
    },
    {
        letter: "D",
        title: "Solicitud de Expedición de CDP",
        risk: "low",
        riskScore: 10,
        responsible: "Área Técnica / Presupuesto",
        diagnostic: "Trámite estándar de asignación de presupuesto para amparar el futuro contrato.",
        law: "Estatuto Orgánico de Presupuesto."
    },
    {
        letter: "E",
        title: "Autorización de Creación de Roles",
        risk: "low",
        riskScore: 20,
        responsible: "Ordenador del Gasto",
        diagnostic: "Se aprueban accesos para la Tienda Virtual (TVEC) sin comités de validación.",
        law: "Reglamentos internos de TI."
    },
    {
        letter: "F",
        title: "Registro en la Tienda Virtual (TVEC)",
        risk: "high",
        riskScore: 75,
        responsible: "Área Técnica (Usuario del Ingeniero)",
        diagnostic: "La creación del evento, el chat con proveedores y la carga de documentos se realiza exclusivamente desde el usuario único del ingeniero de sistemas asignado. Riesgo de manipulación o falta de trazabilidad.",
        law: "Principios de seguridad de la información y transparencia pública."
    },
    {
        letter: "G",
        title: "Selección del Catálogo y Cotizaciones",
        risk: "high",
        riskScore: 90,
        responsible: "Área Técnica (Ingeniero Solitario)",
        diagnostic: "El ingeniero evalúa y decide el proveedor de menor precio en su propio computador. No hay comité evaluador, facilitando errores humanos (como omitir el IVA en el caso de Nuevo Pangea).",
        law: "Ley 1150 de 2007 (Selección objetiva) y Decreto 1082 (Comités asesores)."
    },
    {
        letter: "H",
        title: "Elaboración de Estudios Previos (Posteriores)",
        risk: "high",
        riskScore: 85,
        responsible: "Área Técnica",
        diagnostic: "EL PARADOJA: Se elabora el documento de Estudios 'Previos' después de que el proponente ya fue seleccionado en la plataforma de compra, invirtiendo el sentido de planeación de la ley.",
        law: "Decreto 1082 de 2015 (Estudios y documentos previos indispensables en la etapa de planeación)."
    },
    {
        letter: "I",
        title: "Radicación en Licitaciones",
        risk: "medium",
        riskScore: 60,
        responsible: "Área Técnica",
        diagnostic: "El expediente contractual cerrado se entrega al grupo de licitaciones al final de la compra virtual. Si se detecta un error o inhabilidad de última hora, se debe cancelar todo el evento.",
        law: "Manual de Contratación del Ministerio."
    },
    {
        letter: "J",
        title: "Viabilidad Jurídica para Adjudicar",
        risk: "medium",
        riskScore: 40,
        responsible: "Grupo de Licitaciones (Abogados)",
        diagnostic: "Los abogados revisan el expediente documental estático. No validan de forma dinámica en la TVEC ni verifican inhabilidades de última hora.",
        law: "Responsabilidad civil y penal de los evaluadores."
    },
    {
        letter: "K",
        title: "Aprobación/Rechazo de la Orden de Compra",
        risk: "high",
        riskScore: 95,
        responsible: "Ordenador del Gasto (Directora)",
        diagnostic: "El ordenador del gasto suscribe basándose en la fe del área técnica. Al no contar con filtros exhaustivos (REDAM, RUES) en tiempo real, el firmante asume toda la responsabilidad disciplinaria y fiscal si el proveedor está inhabilitado.",
        law: "Artículo 44 de la Ley 80 de 1993 (Nulidad absoluta) y Código Penal (Celebración indebida de contratos)."
    },
    {
        letter: "L",
        title: "Emisión de Registro Presupuestal (RP)",
        risk: "low",
        riskScore: 10,
        responsible: "Subdirección Financiera",
        diagnostic: "Proceso meramente contable de afectación presupuestal.",
        law: "Estatuto Orgánico de Presupuesto."
    },
    {
        letter: "M",
        title: "Designación de Supervisión",
        risk: "low",
        riskScore: 15,
        responsible: "Grupo de Licitaciones",
        diagnostic: "Elaboración e incorporación del acta de designación de supervisión.",
        law: "Ley 1474 de 2011 (Estatuto Anticorrupción)."
    },
    {
        letter: "N",
        title: "Entrega de Carpeta al Supervisor",
        risk: "low",
        riskScore: 10,
        responsible: "Grupo de Licitaciones",
        diagnostic: "Remisión final de los documentos del contrato para el inicio de la ejecución.",
        law: "Ley 1474 de 2011."
    }
];

/* Data: Procedimiento Nuevo (1-25) */
const newProcedureSteps = [
    {
        num: 1,
        phase: "P",
        title: "Recibir, radicar y asignar trámite",
        responsible: "Auxiliar y Coordinador del Grupo de Contratos",
        desc: "Ingreso formal del requerimiento por radicación. El coordinador asigna inmediatamente a un abogado especializado como responsable.",
        control: null,
        regs: "Solicitud inicial, simulador preliminar, certificado de CDP y soportes de necesidad."
    },
    {
        num: 2,
        phase: "V",
        title: "Analizar estudios y documentos previos",
        responsible: "Abogados del Grupo de Contratos",
        desc: "El abogado realiza un doble check preventivo del simulador y el anexo técnico antes de iniciar el proceso. Devuelve al área de origen si encuentra inconsistencias de vigencias o valores.",
        control: "Control Riesgo: Validación jurídica antes de iniciar en plataforma. Plazo: 2 días.",
        regs: "Oficio de aprobación o comunicación de devolución."
    },
    {
        num: 3,
        phase: "H",
        title: "Configurar el evento RFI",
        responsible: "Abogado y Apoyo Técnico de Contratos",
        desc: "Si el Acuerdo Marco de Precios lo estipula obligatorio, se crea y publica la solicitud de información (RFI) en la TVEC.",
        control: null,
        regs: "Ficha RFI en plataforma TVEC."
    },
    {
        num: 4,
        phase: "V",
        title: "Revisar consultas y observaciones RFI",
        responsible: "Director del Área Técnica y equipo",
        desc: "El apoyo técnico de contratos recopila los comentarios y observaciones técnicas de los proveedores y se las remite al área solicitante.",
        control: null,
        regs: "Registro de descargue de comentarios."
    },
    {
        num: 5,
        phase: "V",
        title: "Analizar limitación a MIPYMES",
        responsible: "Abogado y Coordinador del Grupo de Contratos",
        desc: "Se evalúa formalmente si el proceso debe limitarse a micro y pequeñas empresas bajo las reglas del Decreto 1860 de 2021.",
        control: "Control Riesgo: Comprobación cruzada del RUES frente a las solicitudes recibidas.",
        regs: "Ficha de análisis de Mipymes cargada a la TVEC."
    },
    {
        num: 6,
        phase: "H",
        title: "Publicar aviso de limitación a MIPYMES",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Cargue oficial de la decisión de limitación o libre competencia en el módulo de mensajes de la plataforma.",
        control: null,
        regs: "Aviso de limitación en la TVEC."
    },
    {
        num: 7,
        phase: "V",
        title: "Responder observaciones y ajustar estudios",
        responsible: "Director del Área Técnica y equipo",
        desc: "El área de origen emite las respuestas técnicas definitivas, ajusta la necesidad si es pertinente y genera los estudios previos saneados.",
        control: "Control Riesgo: Validación de modificaciones al presupuesto derivadas de observaciones.",
        regs: "Respuestas técnicas cargadas y estudios previos consolidados."
    },
    {
        num: 8,
        phase: "H",
        title: "Configurar y publicar evento de cotización (RFQ)",
        responsible: "Abogado, Apoyo Técnico y Área Técnica",
        desc: "Publicación oficial del RFQ en la Tienda Virtual. El proceso se realiza en una sesión conjunta para evitar fallas de cargue de vigencias.",
        control: null,
        regs: "Evento de cotización (RFQ) publicado en TVEC."
    },
    {
        num: 9,
        phase: "V",
        title: "Analizar observaciones al RFQ",
        responsible: "Abogado (Jurídicas) y Área Técnica (Técnicas/Económicas)",
        desc: "Estudio coordinado de los cuestionamientos que envían los proveedores sobre los pliegos del RFQ.",
        control: "Control Riesgo: Filtro legal de observaciones para evitar favorecimiento técnico.",
        regs: "Cuadernillo de observaciones en TVEC."
    },
    {
        num: 10,
        phase: "H",
        title: "Publicar respuestas a las observaciones",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Publicación formal del cuadernillo de respuestas consolidado. Deberá realizarse antes de emitir la orden de compra.",
        control: null,
        regs: "Cuadernillo cargado en la plataforma."
    },
    {
        num: 11,
        phase: "H",
        title: "Designación del Comité Asesor y Evaluador",
        responsible: "Ordenador del Gasto (Directora)",
        desc: "Designación formal mediante comunicación interna de los perfiles que integrarán el comité de evaluación integral.",
        control: null,
        regs: "Resolución o comunicación de conformación de comité."
    },
    {
        num: 12,
        phase: "V",
        title: "Analizar cotizaciones recibidas",
        responsible: "Comité Asesor y Evaluador",
        desc: "Una vez vencido el plazo, se abren las cotizaciones públicas de menor a mayor. Se aplican los desempates conforme a la Ley 2069 de 2020.",
        control: null,
        regs: "Listado de ofertas y actas de desempate."
    },
    {
        num: 13,
        phase: "V",
        title: "Evaluar requisitos técnicos, económicos y jurídicos",
        responsible: "Comité Asesor y Evaluador",
        desc: "El abogado del comité evalúa personería y consulta inhabilidades en tiempo real (REDAM, Contraloría, RUES). El área técnica valida la oferta económica (ofertas artificialmente bajas) y cumplimiento de las fichas técnicas del AMP.",
        control: "Control Riesgo: Doble verificación colegiada. Filtro REDAM (deudas de alimentos) y consulta RUES en el acto de adjudicación.",
        regs: "Consultas de inhabilidades firmadas con fecha y hora."
    },
    {
        num: 14,
        phase: "H",
        title: "Consolidar y publicar Informe de Evaluación",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Publicación del acta de evaluación en la TVEC, otorgando un mínimo de 1 día hábil para observaciones de proponentes.",
        control: null,
        regs: "Informe de evaluación publicado en la TVEC."
    },
    {
        num: 15,
        phase: "V",
        title: "Analizar observaciones al informe de evaluación",
        responsible: "Comité Asesor y Evaluador",
        desc: "El comité analiza y contesta las observaciones enviadas por proponentes no seleccionados para blindar jurídicamente la decisión.",
        control: "Control Riesgo: Discusión colegiada para rechazo o aceptación de observaciones.",
        regs: "Cuadernillo de respuestas finales."
    },
    {
        num: 16,
        phase: "H",
        title: "Publicar informe final de evaluación",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Cargue de las respuestas consolidadas y adjudicación final de la oferta ganadora.",
        control: null,
        regs: "Acta definitiva cargada a la TVEC."
    },
    {
        num: 17,
        phase: "H",
        title: "Configurar Orden de Compra",
        responsible: "Abogado y Apoyo Técnico de Contratos",
        desc: "Se estructuran las cantidades, precios y códigos autorizados en la plataforma de la TVEC.",
        control: null,
        regs: "Borrador de la Orden de Compra configurada."
    },
    {
        num: 18,
        phase: "H",
        title: "Suscripción electrónica de la Orden de Compra",
        responsible: "Coordinador de Contratos y Ordenador del Gasto",
        desc: "El ordenador del gasto suscribe digitalmente el contrato en la Tienda Virtual, previa aprobación técnica e informática.",
        control: "Control Riesgo: Verificación final de flujos y firmas electrónicas en TVEC.",
        regs: "Orden de Compra firmada digitalmente."
    },
    {
        num: 19,
        phase: "H",
        title: "Publicar Orden de Compra o Declaratoria",
        responsible: "Abogado y Apoyo Técnico de Contratos",
        desc: "Envío del contrato al contratista o publicación del Acto Administrativo en caso de declaratoria de desierto.",
        control: null,
        regs: "Soportes cargados a la plataforma TVEC."
    },
    {
        num: 20,
        phase: "H",
        title: "Solicitar garantías e iniciar trámite de RP",
        responsible: "Abogado y Apoyo Técnico",
        desc: "Traslado a presupuesto para el Registro Presupuestal y requerimiento oficial al contratista para el envío de seguros.",
        control: null,
        regs: "Oficios de traslado y comunicaciones externas."
    },
    {
        num: 21,
        phase: "V",
        title: "Revisar y aprobar garantías del proveedor",
        responsible: "Abogado y Coordinador de Contratos",
        desc: "Se verifica la vigencia y el monto asegurado frente a las condiciones del AMP. Emisión del certificado formal.",
        control: "Control Riesgo: Validación de suficiencia de coberturas conforme al catálogo.",
        regs: "Certificado de aprobación de garantías en la TVEC."
    },
    {
        num: 22,
        phase: "H",
        title: "Emitir el Registro Presupuestal (RP)",
        responsible: "Grupo de Presupuesto",
        desc: "Se genera el Registro Presupuestal en el SIIF Nación, vinculando los recursos públicos al contrato adjudicado.",
        control: "Control Riesgo: Validación de coincidencia exacta del NIT y valor en SIIF.",
        regs: "Certificado de Registro Presupuestal."
    },
    {
        num: 23,
        phase: "H",
        title: "Notificación formal al Supervisor",
        responsible: "Coordinador del Grupo de Contratos",
        desc: "Elaboración y envío de la resolución de supervisión al funcionario del área técnica.",
        control: null,
        regs: "Comunicación de designación de supervisión."
    },
    {
        num: 24,
        phase: "H",
        title: "Alimentar plataforma interna de supervisión",
        responsible: "Auxiliar Administrativo de Contratos",
        desc: "Se consolidan todos los soportes (CDP, RP, Póliza, firmas) en el sistema de gestión documental.",
        control: null,
        regs: "Expediente digital unificado e indexado."
    },
    {
        num: 25,
        phase: "H",
        title: "Publicar documentos de legalización en TVEC",
        responsible: "Abogado y Apoyo Técnico de Contratos",
        desc: "Cargue del Registro Presupuestal, garantías firmadas y designación de supervisión al módulo público de la TVEC.",
        control: null,
        regs: "Documentos cargados al módulo de la Orden de Compra."
    }
];

/* Scenarios for Stress Simulator */
const scenarios = {
    iva: {
        title: "Caso de IVA omitido (Ej. Nuevo Pangea)",
        description: "El proponente menor **Nuevo Pangea** cotiza en la Tienda Virtual dejando la celda de IVA en **0 (cero)** alegando una exención de computación en la nube. Su cotización es 300 millones de COP menor que las demás.",
        oldPath: [
            { lbl: "Planeación", status: "done", desc: "El ingeniero define el valor en base al simulador sin asesoría legal." },
            { lbl: "RFQ Catálogo", status: "done", desc: "El ingeniero publica el RFQ desde su cuenta personal." },
            { lbl: "Evaluación", status: "done", desc: "El ingeniero ve la oferta baja. Sin comités, asume que la exención de IVA en la plataforma es válida y decide avanzar." },
            { lbl: "Firma OC", status: "done", desc: "La Directora firma el contrato amparada en la fe técnica del ingeniero." },
            { lbl: "Ejecución", status: "failed", desc: "Auditoría de DIAN/Contraloría demuestra que el servicio era arrendamiento de software gravado. Se declara **Nulidad Absoluta** del contrato, reintegro de dineros y juicio fiscal contra la Directora." }
        ],
        newPath: [
            { lbl: "Planeación", status: "done", desc: "El Grupo de Contratos revisa el simulador y define la exención de IVA de forma explícita en los pliegos definitivos." },
            { lbl: "RFQ Catálogo", status: "done", desc: "Se abre el RFQ con supervisión legal y respuestas unificadas." },
            { lbl: "Comité", status: "stopped", desc: "El **Comité Evaluador** (abogado de contratos y técnico) analiza la oferta de Nuevo Pangea. El abogado de contratos exige la justificación y se remite a la DIAN. Al no cumplir con las circulares de exención, se descarta formalmente y se adjudica a la segunda mejor oferta (MSL) que sí contenía el IVA. **Riesgo Fiscal Evitado.**" },
            { lbl: "Firma OC", status: "done", desc: "Se firma la orden de compra con el proponente idóneo." },
            { lbl: "Ejecución", status: "done", desc: "Ejecución exitosa y blindada frente a la Contraloría." }
        ]
    },
    inhabilidad: {
        title: "Inhabilidad del Representante Legal (REDAM/RUES)",
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

/* ==========================================================================
   INITIALIZATION & TAB SWITCHING
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Initial Render
    renderOldProcedure();
    renderNewProcedure();
    loadScenarioInfo();
    
    // Start Interactive Particle Background
    initParticles();
    
    // Back to top scroll listener
    window.addEventListener("scroll", () => {
        const btn = document.getElementById("backToTop");
        if (!btn) return;
        if (window.scrollY > 400) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    });
});

/* Smooth Scroll Navigation */
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ==========================================================================
   INTERACTIVE CANVAS PARTICLE SYSTEM (Premium Light Background)
   ========================================================================== */

let canvas, ctx, particles;
const mouse = { x: null, y: null, radius: 140 };

function initParticles() {
    canvas = document.getElementById("particle-canvas");
    ctx = canvas.getContext("2d");
    resizeCanvas();
    
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });
    
    // Create particle array
    particles = [];
    const numberOfParticles = Math.min(100, Math.floor((canvas.width * canvas.height) / 15000));
    
    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
    }
    
    animateParticles();
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 10;
        
        // Curated colors: Slate grey, vibrant blue accents
        const colors = [
            "rgba(148, 163, 184, 0.4)", // slate 400
            "rgba(148, 163, 184, 0.25)",
            "rgba(37, 99, 235, 0.25)",   // brand blue 600
            "rgba(37, 99, 235, 0.12)"
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    
    update() {
        // Normal drift
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Screen bounds wrap
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
        
        // Mouse interaction (repel/attract based on density)
        if (mouse.x !== null && mouse.y !== null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                let force = (mouse.radius - distance) / mouse.radius;
                let directionX = dx / distance;
                let directionY = dy / distance;
                
                // Slow pull towards mouse (ease effect)
                this.x += directionX * force * 1.5;
                this.y += directionY * force * 1.5;
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw grid mesh lines under nodes for high premium feel
    drawSubtleGrid();
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    
    requestAnimationFrame(animateParticles);
}

function drawSubtleGrid() {
    ctx.strokeStyle = "rgba(226, 232, 240, 0.15)";
    ctx.lineWidth = 0.5;
    const spacing = 100;
    
    for (let x = 0; x < canvas.width; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

/* ==========================================================================
   RENDER OLD PROCEDURE
   ========================================================================== */
function renderOldProcedure() {
    const container = document.getElementById("oldFlowNodes");
    if (!container) return;
    container.innerHTML = "";
    
    oldProcedureSteps.forEach((step, index) => {
        const item = document.createElement("div");
        item.className = `diagram-node ${step.risk === 'high' ? 'risk-high' : ''}`;
        item.setAttribute("onclick", `selectOldStep(${index})`);
        
        let tag = step.risk === 'high' ? '<span class="diagram-tag red">[ CRÍTICO ]</span>' : '<span class="diagram-tag">[ EVALUAR ]</span>';
        
        item.innerHTML = `
            <div class="node-circle-indicator"></div>
            <div class="node-pill-card">
                <div class="node-text-wrap">
                    <h4>Paso ${step.letter}: ${step.title}</h4>
                    <span>Responsable: ${step.responsible}</span>
                </div>
                ${tag}
            </div>
        `;
        container.appendChild(item);
    });
}

function selectOldStep(index) {
    const nodes = document.querySelectorAll("#oldFlowNodes .diagram-node");
    nodes.forEach((el, i) => {
        if (i === index) el.classList.add("active");
        else el.classList.remove("active");
    });
    
    const step = oldProcedureSteps[index];
    
    document.getElementById("oldSidebarPlaceholder").classList.add("hidden");
    const content = document.getElementById("oldSidebarContent");
    content.classList.remove("hidden");
    
    document.getElementById("oldStepTag").innerHTML = `<span class="diagram-tag ${step.risk === 'high' ? 'red' : ''}">Paso ${step.letter} • Riesgo: ${step.riskScore}%</span>`;
    document.getElementById("oldStepTitle").innerText = step.title;
    document.getElementById("oldStepResp").innerText = step.responsible;
    document.getElementById("oldStepDiag").innerText = step.diagnostic;
    document.getElementById("oldStepLaw").innerText = step.law;
}

/* ==========================================================================
   RENDER NEW PROCEDURE
   ========================================================================== */
function renderNewProcedure() {
    const container = document.getElementById("newStepsGrid");
    if (!container) return;
    container.innerHTML = "";
    
    newProcedureSteps.forEach((step, index) => {
        const card = document.createElement("div");
        card.className = `new-node-card phase-${step.phase}`;
        card.setAttribute("data-phase", step.phase);
        card.setAttribute("onclick", `selectNewStep(${index})`);
        
        let controlIndicator = step.control ? '<div class="control-badge-wrap"><i class="fa-solid fa-shield-halved" title="Control Obligatorio"></i></div>' : '';
        let phaseText = step.phase === 'P' ? 'Planear' : step.phase === 'H' ? 'Hacer' : step.phase === 'V' ? 'Verificar' : 'Actuar';
        
        card.innerHTML = `
            <div class="new-card-left">
                <span class="num-lbl">Actividad ${step.num} • ${phaseText}</span>
                <h4>${step.title}</h4>
            </div>
            <div class="new-card-right">
                ${controlIndicator}
            </div>
        `;
        container.appendChild(card);
    });
}

function selectNewStep(index) {
    const cards = document.querySelectorAll("#newStepsGrid .new-node-card");
    cards.forEach((el, i) => {
        if (i === index) el.classList.add("selected");
        else el.classList.remove("selected");
    });
    
    const step = newProcedureSteps[index];
    
    document.getElementById("newSidebarPlaceholder").classList.add("hidden");
    const content = document.getElementById("newSidebarContent");
    content.classList.remove("hidden");
    
    const phaseText = step.phase === 'P' ? 'Planear' : step.phase === 'H' ? 'Hacer' : step.phase === 'V' ? 'Verificar' : 'Actuar';
    
    document.getElementById("newStepTag").innerHTML = `<span class="phva-badge ${step.phase}">Actividad ${step.num} • ${phaseText}</span>`;
    document.getElementById("newStepTitle").innerText = step.title;
    document.getElementById("newStepResp").innerText = step.responsible;
    document.getElementById("newStepDesc").innerText = step.desc;
    document.getElementById("newStepRegs").innerText = step.regs;
    
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
    const filterBtns = document.querySelectorAll(".phva-tabs-control .phva-tab-btn");
    filterBtns.forEach(btn => {
        if (btn.innerText.includes(phase) || (phase === 'all' && btn.innerText === 'Todos los Pasos')) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    const cards = document.querySelectorAll("#newStepsGrid .new-node-card");
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
let simInterval = null;

function loadScenarioInfo() {
    const selectEl = document.getElementById("simulationScenario");
    if (!selectEl) return;
    const sel = selectEl.value;
    const scenario = scenarios[sel];
    
    document.getElementById("scenarioDesc").innerHTML = `
        <strong>${scenario.title}:</strong>
        <p style="margin-top: 6px; font-size: 0.85rem; line-height: 1.45;">${scenario.description}</p>
    `;
    
    // Reset viewports
    document.getElementById("simStageIndicator").innerText = "Listo para iniciar simulación.";
    document.getElementById("visualProgressFill").style.width = "0%";
    document.getElementById("visualNodesRow").innerHTML = "";
    document.getElementById("simResultBox").classList.add("hidden");
}

function runSimulation(procType) {
    if (simInterval) clearInterval(simInterval);
    
    const sel = document.getElementById("simulationScenario").value;
    const scenario = scenarios[sel];
    const path = procType === 'old' ? scenario.oldPath : scenario.newPath;
    
    const nodesRow = document.getElementById("visualNodesRow");
    nodesRow.innerHTML = "";
    
    // Draw visual nodes row
    path.forEach((pNode, index) => {
        const nodeDiv = document.createElement("div");
        nodeDiv.className = "light-sim-node";
        nodeDiv.setAttribute("data-lbl", pNode.lbl);
        nodeDiv.id = `lightSimNode_${index}`;
        nodesRow.appendChild(nodeDiv);
    });
    
    document.getElementById("simResultBox").classList.add("hidden");
    
    let currentStep = 0;
    const progressFill = document.getElementById("visualProgressFill");
    
    simInterval = setInterval(() => {
        if (currentStep < path.length) {
            const stepInfo = path[currentStep];
            document.getElementById("simStageIndicator").innerText = `Etapa: ${stepInfo.lbl} - ${stepInfo.desc}`;
            
            // Progress percentage
            const percent = ((currentStep + 1) / path.length) * 100;
            progressFill.style.width = `${percent}%`;
            
            const node = document.getElementById(`lightSimNode_${currentStep}`);
            if (node) {
                node.classList.add("active");
                if (currentStep > 0) {
                    const prevNode = document.getElementById(`lightSimNode_${currentStep - 1}`);
                    if (prevNode) {
                        prevNode.classList.remove("active");
                        prevNode.classList.add("done");
                    }
                }
                
                if (stepInfo.status === "failed") {
                    node.classList.add("failed");
                } else if (stepInfo.status === "stopped") {
                    node.classList.add("stopped");
                }
            }
            
            if (stepInfo.status === "failed" || stepInfo.status === "stopped") {
                clearInterval(simInterval);
                showSimulationResult(procType, stepInfo);
                return;
            }
            
            currentStep++;
        } else {
            clearInterval(simInterval);
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
        resultBox.className = "sim-output-box danger";
        resultTitle.innerText = "Simulación Fallida: Alerta Contractual";
        resultText.innerHTML = `<strong>Resultado del Procedimiento Viejo:</strong> ${stepInfo.desc}`;
        resultIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    } else if (stepInfo.status === "stopped") {
        resultBox.className = "sim-output-box success";
        resultTitle.innerText = "Simulación Exitosa: Control Activado";
        resultText.innerHTML = `<strong>Resultado del Procedimiento Nuevo:</strong> ${stepInfo.desc}`;
        resultIcon.innerHTML = '<i class="fa-solid fa-shield-halved"></i>';
    } else {
        resultBox.className = "sim-output-box success";
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

// Drag styling
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

async function runDocumentAudit() {
    const text = document.getElementById("pasteText").value.trim();
    if (!text) {
        alert("Por favor, sube un archivo o pega el texto de un estudio previo para auditar.");
        return;
    }
    
    const apiKey = document.getElementById("geminiKey").value.trim();
    
    document.getElementById("auditLoadingBox").classList.remove("hidden");
    document.getElementById("auditResultsBox").classList.add("hidden");
    
    if (apiKey) {
        await runLiveGeminiAudit(text, apiKey);
    } else {
        setTimeout(() => {
            runLocalRegexAudit(text);
        }, 2000);
    }
}

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
            title: "Matriz de Riesgos Sectorial Detectada",
            description: "Se identificaron términos de riesgo contractual, lo que indica la inclusión de una estimación y asignación del riesgo (Decreto 1082)."
        });
    } else {
        findings.push({
            status: "fail",
            title: "Matriz de Riesgos Sectorial Ausente",
            description: "Crítico: El estudio previo omitió la sección de estimación del riesgo contractual. Viene con alta exposición jurídica."
        });
    }
    
    // Check 2: Decreto 1082 / Normativa
    const decreeRegex = /1082|decreto 1082/gi;
    const hasDecree = decreeRegex.test(text);
    if (hasDecree) {
        score += 25;
        findings.push({
            status: "pass",
            title: "Soporte Normativo del Decreto 1082",
            description: "El pliego invoca adecuadamente el Decreto Único Reglamentario del sector administrativo de contratación estatal."
        });
    } else {
        findings.push({
            status: "warn",
            title: "Omisión de Referencia al Decreto 1082",
            description: "Advertencia: El documento no invoca de forma explícita el Decreto 1082 de 2015, debilitando su fundamentación legal."
        });
    }
    
    // Check 3: Garantías
    const insuranceRegex = /garantía|garantias|seguro|poliza/gi;
    const hasInsurance = insuranceRegex.test(text);
    if (hasInsurance) {
        score += 25;
        findings.push({
            status: "pass",
            title: "Amparos de Garantías y Pólizas",
            description: "Se especifica la cobertura de amparos (cumplimiento, salarios, responsabilidad civil) para la protección fiscal de la entidad."
        });
    } else {
        findings.push({
            status: "fail",
            title: "Amparos de Pólizas No Parametrizados",
            description: "Crítico: No se detectan cláusulas sobre la constitución de pólizas de cumplimiento, exponiendo a la entidad a siniestros sin cobertura."
        });
    }
    
    // Check 4: RFI / Estudio del Mercado
    const mktRegex = /rfi|mercado|consulta|cotización/gi;
    const hasMkt = mktRegex.test(text);
    if (hasMkt) {
        score += 25;
        findings.push({
            status: "pass",
            title: "Estudio de Mercado / Consulta RFI",
            description: "El pliego contiene referencias a cotizaciones, análisis de precios unitarios o solicitudes previas al catálogo."
        });
    } else {
        findings.push({
            status: "warn",
            title: "Consulta al Catálogo No Evidenciada",
            description: "Advertencia: Ausencia de soportes que demuestren un sondeo formal (RFI) previo al catálogo de Colombia Compra Eficiente."
        });
    }
    
    renderAuditResults(score, findings);
}

async function runLiveGeminiAudit(text, apiKey) {
    const prompt = `
    Actúas como un auditor jurídico de contratación pública en Colombia.
    Analiza el texto de un estudio previo frente al Decreto 1082 de 2015.
    Identifica si cumple con:
    1) Matriz de Riesgos Sectorial.
    2) Justificación de factores de selección.
    3) Exigencia de amparos y garantías.
    4) Trazabilidad de consultas y RFI del catálogo.
    Retorna un objeto JSON válido sin texto markdown extra:
    {
      "score": <número entero entre 0 y 100>,
      "findings": [
        {
          "status": "pass" | "warn" | "fail",
          "title": "<título corto>",
          "description": "<explicación de cumplimiento en español referenciando la ley>"
        }
      ]
    }
    Analiza:
    """
    ${text.substring(0, 10000)}
    """
    `;
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            })
        });
        
        if (!response.ok) throw new Error("API Error");
        
        const data = await response.json();
        const jsonText = data.candidates[0].content.parts[0].text;
        const result = JSON.parse(jsonText);
        
        document.getElementById("auditLoadingBox").classList.add("hidden");
        document.getElementById("auditResultsBox").classList.remove("hidden");
        
        renderAuditResults(result.score, result.findings);
    } catch (err) {
        console.error(err);
        document.getElementById("auditLoadingText").innerText = "Error de conexión. Iniciando auditoría local de respaldo...";
        setTimeout(() => {
            runLocalRegexAudit(text);
        }, 1500);
    }
}

function renderAuditResults(score, findings) {
    const radial = document.getElementById("radialProgress");
    const scoreText = document.getElementById("scorePercent");
    const chart = radial.parentElement;
    
    scoreText.innerText = `${score}%`;
    radial.setAttribute("stroke-dasharray", `${score}, 100`);
    
    if (score >= 75) {
        chart.setAttribute("class", "circular-chart green");
    } else if (score >= 45) {
        chart.setAttribute("class", "circular-chart yellow");
    } else {
        chart.setAttribute("class", "circular-chart red");
    }
    
    const checklist = document.getElementById("checklistResults");
    checklist.innerHTML = "";
    
    findings.forEach(item => {
        const checkItem = document.createElement("div");
        checkItem.className = `light-check-item ${item.status}`;
        
        let icon = "";
        if (item.status === "pass") icon = '<i class="fa-solid fa-circle-check"></i>';
        else if (item.status === "warn") icon = '<i class="fa-solid fa-circle-exclamation"></i>';
        else icon = '<i class="fa-solid fa-circle-xmark"></i>';
        
        checkItem.innerHTML = `
            <div style="font-size: 1.15rem; margin-top: 1px;">${icon}</div>
            <div class="light-check-content">
                <h5>${item.title}</h5>
                <p>${item.description}</p>
            </div>
        `;
        checklist.appendChild(checkItem);
    });
}
