// ============================================================
// DATA.JS — Definiciones de pasos y casos de simulación
// ============================================================

// ---- PROCEDIMIENTO ANTIGUO (MHCP) — 14 pasos ----
const OLD_STEPS = [
  {
    id: 'old-a', code: 'a',
    title: 'Identificar necesidad de adquisición',
    desc: 'La dependencia verifica si existe un Acuerdo Marco de Precio vigente que satisfaga su necesidad.',
    responsible: 'Dependencia interesada',
    hasControl: false
  },
  {
    id: 'old-b', code: 'b',
    title: 'Verificar existencia de AMP en SECOP',
    desc: 'Ingresar a colombiacompra.gov.co para verificar existencia y vigencia del Acuerdo Marco.',
    responsible: 'Dependencia interesada',
    hasControl: false
  },
  {
    id: 'old-c', code: 'c',
    title: 'Adelantar tareas del Acuerdo',
    desc: 'Adelantar las tareas previstas en el Acuerdo Marco para recibir bienes o servicios.',
    responsible: 'Dependencia interesada',
    hasControl: false
  },
  {
    id: 'old-d', code: 'd',
    title: 'Solicitar Certificado de Disponibilidad Presupuestal',
    desc: 'Solicitar el CDP con el cual se ampara la ejecución de la Orden de Compra.',
    responsible: 'Área interesada',
    hasControl: false
  },
  {
    id: 'old-e', code: 'e',
    title: 'Autorizar roles en Tienda Virtual',
    desc: 'El ordenador del gasto autoriza la creación de roles para la adquisición en la TVEC.',
    responsible: 'Ordenador del Gasto',
    tag: '1 sola persona decide',
    hasControl: false
  },
  {
    id: 'old-f', code: 'f',
    title: 'Registro de usuario en TVEC',
    desc: 'El funcionario se registra como comprador en la Tienda Virtual del Estado Colombiano.',
    responsible: 'Funcionario del área',
    hasControl: false
  },
  {
    id: 'old-g', code: 'g',
    title: 'Buscar producto y seleccionar proveedor',
    desc: 'Buscar producto/servicio, analizar ofertas del catálogo y seleccionar proveedor según criterios del AMP.',
    responsible: 'Comprador (1 sola persona)',
    tag: 'Sin verificación cruzada',
    hasControl: false
  },
  {
    id: 'old-h', code: 'h',
    title: 'Elaborar Estudios Previos',
    desc: 'Indicar el proveedor con condiciones más favorables. El criterio de selección es el menor precio.',
    responsible: 'Área solicitante',
    tag: 'Sin revisión jurídica obligatoria',
    hasControl: false
  },
  {
    id: 'old-i', code: 'i',
    title: 'Radicar documentos en Licitaciones',
    desc: 'Radicar estudios previos, solicitud de contratación, CDP y demás soportes.',
    responsible: 'Área solicitante',
    hasControl: false
  },
  {
    id: 'old-j', code: 'j',
    title: 'Verificar documentos — viabilidad jurídica',
    desc: 'El Coordinador informa al Ordenador del Gasto la viabilidad jurídica para aprobar.',
    responsible: 'Coordinador',
    hasControl: false
  },
  {
    id: 'old-k', code: 'k',
    title: 'Aprobar o rechazar Orden de Compra',
    desc: 'El Ordenador del Gasto aprueba o rechaza la orden de compra recibida.',
    responsible: 'Ordenador del Gasto',
    tag: '1 sola persona decide',
    hasControl: false
  },
  {
    id: 'old-l', code: 'l',
    title: 'Remitir a Subdirección Financiera',
    desc: 'Remitir la Orden de Compra aprobada para efectuar el Registro Presupuestal.',
    responsible: 'Grupo de Licitaciones',
    hasControl: false
  },
  {
    id: 'old-m', code: 'm',
    title: 'Designar supervisión',
    desc: 'Proyectar para firma del Ordenador del Gasto la designación de supervisión.',
    responsible: 'Ordenador del Gasto',
    tag: '1 sola persona decide',
    hasControl: false
  },
  {
    id: 'old-n', code: 'n',
    title: 'Remitir documentación al supervisor',
    desc: 'Entregar documentación soporte al supervisor para iniciar ejecución del contrato.',
    responsible: 'Grupo de Licitaciones',
    hasControl: false
  }
];


// ---- PROCEDIMIENTO MEJORADO (Modelo MinCIT adaptado) — 25 pasos ----
const NEW_STEPS = [
  {
    id: 'new-1', number: 1, phva: 'P',
    title: 'Recibir, radicar y asignar trámite',
    desc: 'El Coordinador del Grupo de Contratos recibe la solicitud y la asigna al abogado responsable.',
    responsible: 'Auxiliar Administrativo / Coordinador',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-2', number: 2, phva: 'V',
    title: 'Analizar estudios y documentos previos',
    desc: 'El abogado analiza estudios previos, matriz de riesgos y documentos del área solicitante. Si hay inconsistencias, devuelve con observaciones.',
    responsible: 'Profesionales del Grupo de Contratos',
    time: '2 días', hasControl: true
  },
  {
    id: 'new-3', number: 3, phva: 'H',
    title: 'Configurar evento RFI',
    desc: 'Configurar el Evento de Solicitud de Información en la TVEC (cuando sea obligatorio).',
    responsible: 'Abogado + Apoyo Técnico Plataformas',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-4', number: 4, phva: 'V',
    title: 'Revisión de consultas y observaciones RFI',
    desc: 'Remitir observaciones de proveedores al equipo técnico para análisis y respuesta.',
    responsible: 'Jefe del Área / Equipo de trabajo',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-5', number: 5, phva: 'V',
    title: 'Analizar limitación a MIPYMES',
    desc: 'Verificar si se recibieron solicitudes de limitación a MIPYMES y si cumplen requisitos del Decreto 1860/2021.',
    responsible: 'Abogado + Coordinador',
    time: '1 día', hasControl: true
  },
  {
    id: 'new-6', number: 6, phva: 'H',
    title: 'Publicar aviso de limitación MIPYMES',
    desc: 'Emitir y publicar aviso de limitación o no limitación a MIPYMES en la TVEC.',
    responsible: 'Abogado + Coordinador',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-7', number: 7, phva: 'V',
    title: 'Respuesta a observaciones de proveedores',
    desc: 'El área emite documento de análisis técnico contestando cada observación. Puede requerir reinicio del proceso.',
    responsible: 'Jefe del Área / Equipo de trabajo',
    time: '2 días', hasControl: true
  },
  {
    id: 'new-8', number: 8, phva: 'H',
    title: 'Configurar evento de cotización (RFQ)',
    desc: 'Configurar el evento de cotización en la TVEC con presencia del área solicitante.',
    responsible: 'Abogado + Apoyo Técnico + Área solicitante',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-9', number: 9, phva: 'V',
    title: 'Analizar observaciones al evento de cotización',
    desc: 'Analizar observaciones recibidas y emitir respuesta según competencias jurídicas, técnicas y económicas.',
    responsible: 'Abogado + Área técnica',
    time: 'Según AMP', hasControl: true
  },
  {
    id: 'new-10', number: 10, phva: 'H',
    title: 'Publicar cuadernillo de observaciones',
    desc: 'Publicar las respuestas a observaciones. Si se detectan impedimentos, retomar desde actividad 8.',
    responsible: 'Abogado + Coordinador',
    time: 'Según AMP', hasControl: false
  },
  {
    id: 'new-11', number: 11, phva: 'H',
    title: 'Designación del Comité Evaluador',
    desc: 'El Ordenador del Gasto designa formalmente a los miembros del Comité Asesor y Evaluador.',
    responsible: 'Ordenador del Gasto',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-12', number: 12, phva: 'V',
    title: 'Analizar cotizaciones recibidas',
    desc: 'Determinar la cotización de menor precio y evaluar aspectos jurídicos, técnicos y económicos. Aplicar desempate si corresponde.',
    responsible: 'Comité Evaluador (múltiples actores)',
    time: '2 días', hasControl: false
  },
  {
    id: 'new-13', number: 13, phva: 'V',
    title: 'Evaluar cumplimiento técnico y viabilidad económica',
    desc: 'Evaluar requisitos técnicos del AMP. Analizar viabilidad económica según Guía de Ofertas Artificialmente Bajas de CCE. Verificar capacidad jurídica e inhabilidades.',
    responsible: 'Comité Evaluador (jurídico + técnico + económico)',
    time: '2 días', hasControl: true
  },
  {
    id: 'new-14', number: 14, phva: 'H',
    title: 'Consolidar Informe de Evaluación',
    desc: 'Consolidar y publicar el informe de evaluación en la TVEC con plazo para observaciones.',
    responsible: 'Profesional + Coordinador',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-15', number: 15, phva: 'V',
    title: 'Analizar observaciones al informe de evaluación',
    desc: 'El Comité Evaluador analiza observaciones y emite cuadernillo de respuestas e informe final.',
    responsible: 'Comité Evaluador',
    time: '2 días', hasControl: true
  },
  {
    id: 'new-16', number: 16, phva: 'H',
    title: 'Publicar informe final de evaluación',
    desc: 'Publicar informe final y respuestas a observaciones en la plataforma TVEC.',
    responsible: 'Abogado + Coordinador',
    time: 'Según AMP', hasControl: false
  },
  {
    id: 'new-17', number: 17, phva: 'H',
    title: 'Configurar y colocar Orden de Compra',
    desc: 'Configurar la orden de compra en la TVEC conforme al informe final de evaluación, con presencia del área solicitante.',
    responsible: 'Abogado + Apoyo Técnico + Área solicitante',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-18', number: 18, phva: 'H',
    title: 'Suscripción electrónica de la Orden de Compra',
    desc: 'El Ordenador del Gasto suscribe la orden previa aprobación del flujo por el Coordinador del Grupo de Contratos.',
    responsible: 'Coordinador → Ordenador del Gasto',
    time: '1 día', hasControl: true
  },
  {
    id: 'new-19', number: 19, phva: 'H',
    title: 'Publicación de la Orden o Declaratoria de Desierto',
    desc: 'La plataforma TVEC envía la orden al proveedor automáticamente. Si es desierto, el Ordenador firma el acto administrativo.',
    responsible: 'Abogado + Apoyo Técnico',
    time: 'Según AMP', hasControl: false
  },
  {
    id: 'new-20', number: 20, phva: 'H',
    title: 'Remitir para registro presupuestal y garantías',
    desc: 'Solicitar al contratista la constitución de garantías exigidas por el AMP a favor de la entidad compradora.',
    responsible: 'Abogado + Área solicitante',
    time: '3 días', hasControl: false
  },
  {
    id: 'new-21', number: 21, phva: 'V',
    title: 'Revisión y aprobación de garantías',
    desc: 'Verificar condiciones de suficiencia y vigencia de las coberturas de amparos del AMP. Emitir certificado de aprobación.',
    responsible: 'Abogado + Coordinador',
    time: '1 día', hasControl: true
  },
  {
    id: 'new-22', number: 22, phva: 'H',
    title: 'Emitir Registro Presupuestal',
    desc: 'El Grupo de Presupuesto emite el certificado de Registro Presupuestal por el valor de la Orden.',
    responsible: 'Grupo de Presupuesto',
    time: '1 día', hasControl: true
  },
  {
    id: 'new-23', number: 23, phva: 'H',
    title: 'Notificación al Supervisor',
    desc: 'Notificar al supervisor su designación mediante comunicación formal.',
    responsible: 'Técnico Administrativo / Coordinador',
    time: '1 día', hasControl: false
  },
  {
    id: 'new-24', number: 24, phva: 'H',
    title: 'Incluir en plataforma interna de contratación',
    desc: 'Incorporar todos los documentos soporte en la plataforma de supervisión. Notificación automática al supervisor.',
    responsible: 'Auxiliar / Técnico Administrativo',
    time: '3 días', hasControl: false
  },
  {
    id: 'new-25', number: 25, phva: 'H',
    title: 'Reportar en RUES',
    desc: 'Reportar los contratos suscritos a las Cámaras de Comercio en la plataforma RUES (cuando aplique).',
    responsible: 'Técnico Administrativo',
    time: '1 mes', hasControl: false
  }
];


// ---- CASOS DE SIMULACIÓN ----
const CASES = [
  {
    id: 1,
    icon: '📊',
    title: 'Consultoría Financiera Especializada',
    subtitle: 'Reestructuración de deuda pública',
    value: '$15.200.000.000',
    desc: 'Contratación de firma consultora internacional para asesoría en reestructuración de pasivos financieros del MHCP.',
    riskType: 'Pliegos Sastre / Direccionamiento',
    // Pasos del procedimiento viejo donde hay riesgo oculto (índice 0-based)
    oldWarnings: [
      { stepIndex: 6, msg: 'Un solo funcionario seleccionó proveedor sin verificación cruzada. Los requisitos habilitantes fueron diseñados a medida de un oferente.', severity: 'critical' },
      { stepIndex: 7, msg: 'Estudios previos elaborados sin revisión jurídica. No se verificó objetividad de los criterios de selección.', severity: 'critical' },
      { stepIndex: 10, msg: 'El Ordenador del Gasto aprobó sin informe de evaluación de un comité. Decisión unipersonal en contrato de $15.200M.', severity: 'critical' }
    ],
    // Paso del nuevo procedimiento donde se bloquea (índice 0-based)
    newBlockIndex: 1,
    newBlockMsg: 'ANÁLISIS JURÍDICO: El abogado responsable detectó que los requisitos habilitantes de experiencia y capacidad financiera fueron estructurados para favorecer a un único proponente (Pliegos Sastre). Se devuelve a la dependencia para reestructuración de requisitos con criterios objetivos según Ley 1150 de 2007, Art. 5.',
    newBlockNorm: 'Ley 1150/2007 Art. 5 — Principio de Selección Objetiva'
  },
  {
    id: 2,
    icon: '💻',
    title: 'Adquisición de Equipos Tecnológicos',
    subtitle: 'Renovación de infraestructura TI',
    value: '$3.800.000.000',
    desc: 'Compra de servidores, estaciones de trabajo y equipos de red para modernización tecnológica del ministerio.',
    riskType: 'Oferta Artificialmente Baja',
    oldWarnings: [
      { stepIndex: 6, msg: 'El comprador seleccionó la oferta de menor precio sin analizar si el valor es artificialmente bajo. Riesgo de incumplimiento.', severity: 'critical' },
      { stepIndex: 7, msg: 'Los estudios previos no incluyeron análisis de viabilidad económica de las ofertas recibidas.', severity: 'warning' },
      { stepIndex: 10, msg: 'Aprobación sin verificación de que el precio ofertado cubre costos reales de producción y entrega.', severity: 'critical' }
    ],
    newBlockIndex: 12,
    newBlockMsg: 'EVALUACIÓN ECONÓMICA: El Comité Evaluador, aplicando la Guía de Ofertas Artificialmente Bajas de Colombia Compra Eficiente, determinó que la oferta de menor precio ($2.190M) está un 42% por debajo del promedio de mercado. Se requiere justificación económica del proveedor o se procede con la siguiente oferta elegible.',
    newBlockNorm: 'Decreto 1082/2015 Art. 2.2.1.1.2.2.4 — Oferta con valor artificialmente bajo'
  },
  {
    id: 3,
    icon: '📋',
    title: 'Servicios de Outsourcing Contable',
    subtitle: 'Tercerización de procesos financieros',
    value: '$8.500.000.000',
    desc: 'Contratación de servicios de outsourcing para gestión contable, tributaria y de nómina del MHCP.',
    riskType: 'Matriz de Riesgos Manipulada',
    oldWarnings: [
      { stepIndex: 7, msg: 'Estudios previos no contienen matriz de riesgos. No se identificaron ni tipificaron riesgos previsibles del contrato.', severity: 'critical' },
      { stepIndex: 9, msg: 'La verificación de documentos no detectó la ausencia de la matriz de riesgos obligatoria.', severity: 'critical' },
      { stepIndex: 10, msg: 'El Ordenador aprobó un contrato de $8.500M sin análisis de riesgos, violando el Decreto 1082/2015.', severity: 'critical' }
    ],
    newBlockIndex: 1,
    newBlockMsg: 'REVISIÓN DOCUMENTAL: Los estudios previos no incluyen la Matriz de Riesgos sectorial obligatoria. El análisis que soporta la exigencia de garantías y su suficiencia está incompleto. Se devuelve documentación al área solicitante para corrección conforme al Decreto 1082 de 2015.',
    newBlockNorm: 'Decreto 1082/2015 Art. 2.2.1.1.1.6.3 — Estimación, tipificación y asignación de riesgos'
  },
  {
    id: 4,
    icon: '🏗️',
    title: 'Mantenimiento de Infraestructura Física',
    subtitle: 'Adecuación de sedes del ministerio',
    value: '$2.100.000.000',
    desc: 'Contrato de mantenimiento y adecuación de las instalaciones físicas de tres sedes del MHCP en Bogotá.',
    riskType: 'Exclusión ilegal de MIPYMES',
    oldWarnings: [
      { stepIndex: 4, msg: 'Se autorizaron roles sin verificar si aplica limitación a MIPYMES conforme al Decreto 1860/2021.', severity: 'warning' },
      { stepIndex: 6, msg: 'Se seleccionó proveedor de gran empresa sin considerar solicitudes de limitación a MIPYMES.', severity: 'critical' },
      { stepIndex: 10, msg: 'Aprobación del contrato sin cumplir con el deber de analizar la participación de MIPYMES.', severity: 'critical' }
    ],
    newBlockIndex: 4,
    newBlockMsg: 'ANÁLISIS MIPYMES: Se recibieron 3 solicitudes de limitación de convocatoria a MIPYMES que cumplen con los requisitos del Decreto 1860 de 2021. El proceso DEBE ser limitado a MIPYMES antes de continuar con la cotización. Se requiere configurar el evento con esta restricción.',
    newBlockNorm: 'Decreto 1860/2021 — Limitación a Mipymes en contratación pública'
  },
  {
    id: 5,
    icon: '🖥️',
    title: 'Licenciamiento de Software Empresarial',
    subtitle: 'Plataforma de gestión documental',
    value: '$5.600.000.000',
    desc: 'Adquisición de licencias de software para sistema de gestión documental y automatización de procesos.',
    riskType: 'Garantías Insuficientes',
    oldWarnings: [
      { stepIndex: 7, msg: 'Los estudios previos no especifican requisitos de garantías de calidad ni soporte post-venta.', severity: 'warning' },
      { stepIndex: 10, msg: 'Se aprobó la orden sin verificar que las garantías cubrieran el plazo real de implementación (18 meses vs 6 meses ofertados).', severity: 'critical' },
      { stepIndex: 13, msg: 'El supervisor recibió documentación sin garantías adecuadas. Riesgo patrimonial no cubierto.', severity: 'critical' }
    ],
    newBlockIndex: 20,
    newBlockMsg: 'VERIFICACIÓN DE GARANTÍAS: La póliza de cumplimiento presentada tiene vigencia de 6 meses, pero el plazo de ejecución es de 18 meses. El amparo de calidad del servicio no cubre la fase de estabilización post-implementación. Se requiere corrección de las garantías antes de aprobar.',
    newBlockNorm: 'Decreto 1082/2015 Art. 2.2.1.2.3.1.1 — Suficiencia y vigencia de garantías'
  }
];


// ---- FASES PHVA (colores) ----
const PHVA_CONFIG = {
  P: { label: 'Planear', color: '#448AFF', bg: 'rgba(68,138,255,0.15)' },
  H: { label: 'Hacer', color: '#00C853', bg: 'rgba(0,200,83,0.15)' },
  V: { label: 'Verificar', color: '#FF9100', bg: 'rgba(255,145,0,0.15)' },
  A: { label: 'Actuar', color: '#AA00FF', bg: 'rgba(170,0,255,0.15)' }
};
