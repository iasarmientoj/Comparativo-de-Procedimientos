# 🏛️ Entendiendo el Proyecto García — Guía para Ingenieros

## ¿Qué es todo esto? (La Explicación Simple)

Imagina que el gobierno colombiano es una empresa gigante que necesita comprar cosas: computadores, consultorías, servicios de aseo, software, etc. Como es plata pública (de los impuestos de todos), no puede simplemente llamar a un amigo y decirle "te compro a ti". Tiene que seguir **procedimientos** para que la compra sea transparente, justa y al mejor precio.

Estos procedimientos están regulados por leyes como:
- **Ley 80 de 1993** — El Estatuto General de Contratación Pública
- **Ley 1150 de 2007** — Que la modernizó
- **Decreto 1082 de 2015** — Que reglamenta todo el detalle operativo

---

## ¿Qué es un "Acuerdo Marco de Precios" (AMP)?

Es como un **catálogo pre-negociado por el gobierno**. Funciona así:

1. **Colombia Compra Eficiente** (una agencia del gobierno) hace una licitación grande y selecciona proveedores para ciertos bienes/servicios comunes (ejemplo: computadores portátiles, papel, servicios de aseo).
2. Esos proveedores quedan en un "catálogo" con precios máximos ya definidos.
3. Cuando una entidad como el **Ministerio de Hacienda (MHCP)** necesita comprar algo que está en ese catálogo, no tiene que hacer toda una licitación pública desde cero. Entra a la "Tienda Virtual del Estado Colombiano" (TVEC), busca lo que necesita, y genera una **Orden de Compra**.

> **Analogía de ingeniero**: Es como si AWS tuviera contratos marco con el gobierno. Si el Ministerio necesita servidores cloud, en vez de hacer una licitación para elegir entre AWS, Azure y Google Cloud, simplemente va al catálogo donde ya están pre-aprobados y elige basándose en precio y especificaciones técnicas.

---

## El Problema Concreto: El Procedimiento Antiguo del MHCP

Tu amigo Juan Pablo trabaja en el **Ministerio de Hacienda y Crédito Público (MHCP)**. Allí tienen un procedimiento interno que define cómo deben comprar cosas mediante estos Acuerdos Marco de Precios. 

### ¿Qué dice el procedimiento antiguo? (Resumido)

Es un documento de **14 pasos** (literales a hasta n) bastante genérico y lineal:

| Paso | Qué hace | Quién lo hace |
|------|----------|---------------|
| a-b | Identificar la necesidad y verificar si hay AMP | La dependencia interesada |
| c | Adelantar las tareas del Acuerdo | La dependencia |
| d | Pedir Certificado de Disponibilidad Presupuestal (CDP) | La dependencia |
| e | El "ordenador del gasto" autoriza los roles en la Tienda Virtual | El jefe (una sola persona) |
| f | Registrarse en la Tienda Virtual | Un funcionario |
| g | Buscar producto, analizar ofertas, seleccionar proveedor | El comprador (una persona) |
| h | Elaborar Estudios Previos | El área solicitante |
| i | Radicar documentos en Licitaciones y Procesos Especiales | El área solicitante |
| j | Verificar documentos e informar viabilidad | El Coordinador |
| k | El Ordenador del Gasto aprueba o rechaza la Orden de Compra | **Una sola persona** |
| l | Remitir a Subdirección Financiera para Registro Presupuestal | Grupo de Licitaciones |
| m | Designar supervisor | El Ordenador del Gasto |
| n | Enviar documentación al supervisor | Grupo de Licitaciones |

### ¿Cuáles son los problemas críticos?

> [!CAUTION]
> **Problema #1: Concentración de poder en el "Ordenador del Gasto"**
> 
> En los pasos **e, k y m**, una sola persona (el Ordenador del Gasto) toma las decisiones clave: autoriza roles, aprueba o rechaza la Orden de Compra, y designa al supervisor. No hay comité evaluador, no hay verificación cruzada, no hay contrapeso.

> [!CAUTION]
> **Problema #2: Sin controles de verificación cruzada**
> 
> No se menciona un **comité evaluador** formal. Un solo funcionario (paso g) busca y selecciona al proveedor. No hay segunda opinión técnica, económica ni jurídica obligatoria.

> [!CAUTION]
> **Problema #3: Estudios Previos sin verificación rigurosa**
> 
> Los Estudios Previos (paso h) los elabora la misma área que quiere comprar. No hay revisión jurídica obligatoria antes de radicar. No se mencionan matrices de riesgos, ni análisis de ofertas artificialmente bajas.

> [!CAUTION]
> **Problema #4: Sin trazabilidad ni auditoría**
> 
> No se menciona dónde quedan los registros, quién puede modificar documentos, ni cómo se garantiza que no se alteren los criterios después de ver las ofertas (los famosos "pliegos sastre" — pliegos hechos a la medida de un proveedor específico).

---

## ¿Qué trae el Procedimiento Nuevo? (El modelo a adaptar)

El procedimiento nuevo (que es del **MinCIT** — Ministerio de Comercio, Industria y Turismo, y que Juan Pablo va a adaptar al MHCP) tiene **25 pasos** con una estructura radicalmente diferente:

### Mejoras Clave

| Aspecto | Procedimiento Antiguo (MHCP) | Procedimiento Nuevo (modelo MinCIT) |
|---------|------------------------------|--------------------------------------|
| **Pasos** | 14 genéricos | 25 detallados con tiempos |
| **Responsables** | Vagos ("la dependencia") | Específicos con roles claros |
| **Comité Evaluador** | ❌ No existe | ✅ Designado formalmente (paso 11) |
| **Revisión Jurídica** | ❌ No mencionada | ✅ Abogado responsable analiza todo (paso 2) |
| **Verificación Cruzada** | ❌ Una persona decide | ✅ Múltiples actores: jurídico, técnico, económico |
| **Matriz de Riesgos** | ❌ No mencionada | ✅ Explícita en Estudios Previos (sección 4.3) |
| **Ofertas artificialmente bajas** | ❌ Sin control | ✅ Guía específica de CCE (paso 13) |
| **Puntos de Control** | ❌ No existen | ✅ Columna dedicada en cada paso ("APLICA" / "N/A") |
| **Tiempos** | ❌ Sin plazos | ✅ Cada actividad tiene plazo definido |
| **Trazabilidad** | ❌ Mínima | ✅ Registros específicos por paso |
| **Garantías** | ❌ No mencionadas | ✅ Revisión, aprobación y publicación (paso 21) |
| **Ciclo PHVA** | ❌ No aplica | ✅ Cada paso identificado con P, H, V, A |
| **MIPYMES** | ❌ Ignorado | ✅ Análisis de limitación obligatorio (pasos 5-6) |
| **Flujo de aprobación** | Una persona | Coordinador → Ordenador del Gasto con constancia de flujo |

---

## 🎯 La Ironía que Menciona tu Amigo: Verificable y Real

### "En lo barato super controles, en lo caro depende de una sola persona"

**Esto es completamente cierto y documentable.** Así funciona en Colombia:

### Procesos de Mínima Cuantía (< ~$50 millones COP aprox.)
- Se rigen por el **Artículo 94 de la Ley 1474 de 2011** y el **Artículo 2.2.1.2.1.5.1 del Decreto 1082**
- Aunque son montos pequeños, exigen:
  - ✅ Publicación de invitación pública mínimo 1 día hábil
  - ✅ Recepción de al menos una oferta  
  - ✅ Verificación de requisitos habilitantes
  - ✅ Selección por **menor precio**
  - ✅ Publicación en SECOP
  - ✅ Trazabilidad completa del proceso

### Contratos por Acuerdo Marco de Precios (pueden ser de **miles de millones COP**)
Según el procedimiento antiguo del MHCP:
- ❌ **Una sola persona** (el Ordenador del Gasto) autoriza, aprueba y designa supervisor
- ❌ **Un solo funcionario** busca y selecciona proveedor
- ❌ **Sin comité evaluador** formal
- ❌ **Sin revisión jurídica** obligatoria de los Estudios Previos
- ❌ **Sin matriz de riesgos** explícita
- ❌ **Sin tiempos** definidos (se puede dilatar o acelerar a conveniencia)

> [!WARNING]
> ### La paradoja real
> Un contrato de **$30 millones** para comprar sillas tiene más controles de verificación y transparencia que un contrato de **$30.000 millones** para una consultoría financiera, simplemente porque el segundo pasa por Acuerdo Marco con un procedimiento interno deficiente.

### Evidencia verificable

1. **La Contraloría General de la República** ha documentado sistemáticamente hallazgos en contratación por AMP donde hay falta de trazabilidad y controles insuficientes ([Informes de Auditoría CGR](https://www.contraloria.gov.co)).

2. **Transparencia por Colombia** (capítulo de Transparency International) ha señalado que la contratación directa y los procesos con poca competencia son los más vulnerables a la corrupción ([transparenciacolombia.org.co](https://transparenciacolombia.org.co)).

3. **El Decreto 1082 de 2015** (Art. 2.2.1.1.1.6.3) exige que toda entidad estatal **estime, tipifique y asigne los riesgos** previsibles, pero el procedimiento antiguo del MHCP ni siquiera menciona la palabra "riesgo".

4. **La Misión de Observación Electoral (MOE)** ha documentado cómo la contratación directa, al concentrar la decisión en una persona, facilita el direccionamiento de contratos y "pago de favores" ([moe.org.co](https://moe.org.co)).

5. **La jurisprudencia del Consejo de Estado** establece que la responsabilidad del Ordenador del Gasto es **indelegable** en cuanto a vigilancia — pero si el procedimiento no le da herramientas de control, ¿cómo vigila?

---

## 📐 ¿Qué vamos a construir entonces?

Entendiendo todo esto, las dos herramientas que vamos a crear tienen sentido perfecto:

### 1. Simulador Comparativo Web 🆚
Una aplicación web donde se toma un **caso hipotético** (ej: compra de consultoría financiera por $15.000 millones) y se "pasa" por ambos procedimientos. 

En el procedimiento antiguo, se muestra cómo:
- Un solo funcionario selecciona proveedor sin contrapeso → ⚠️ Riesgo de direccionamiento
- No hay revisión de ofertas artificialmente bajas → ⚠️ Riesgo de sobrecosto
- El Ordenador del Gasto aprueba sin informe de evaluación → ⚠️ Riesgo fiscal

En el nuevo, cada uno de esos puntos tiene un **control que lo detiene**.

### 2. Prototipo de Software de Verificación ✅
Una herramienta que acompaña **cada paso** del nuevo procedimiento con un checklist de puntos críticos. En cada paso, el usuario puede:
- Ver qué riesgos aplican
- Marcar verificaciones como completadas
- Generar un registro de auditoría

---

## Glosario Rápido para Ingenieros

| Término | Significado |
|---------|-------------|
| **MHCP** | Ministerio de Hacienda y Crédito Público |
| **MinCIT** | Ministerio de Comercio, Industria y Turismo |
| **CCE** | Colombia Compra Eficiente (agencia que administra los AMP) |
| **AMP** | Acuerdo Marco de Precios |
| **TVEC** | Tienda Virtual del Estado Colombiano (donde se hacen las compras) |
| **SECOP** | Sistema Electrónico de Contratación Pública |
| **CDP** | Certificado de Disponibilidad Presupuestal |
| **Ordenador del Gasto** | El jefe/director que autoriza el gasto de plata pública |
| **Estudios Previos** | Documento que justifica por qué se necesita comprar algo |
| **Pliegos Sastre** | Pliegos de condiciones hechos a la medida de un proveedor (ilegal/antiético) |
| **PHVA** | Planear-Hacer-Verificar-Actuar (ciclo de mejora continua) |
| **Registro Presupuestal** | El acto que "congela" la plata para un contrato específico |
