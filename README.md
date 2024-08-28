# Examen Turing

## Descripción

**Examen Turing** es una aplicación web desarrollada con Angular que permite a los usuarios simular y experimentar con diferentes tipos de Máquinas de Turing. El proyecto incluye:

- **Simulador de Máquina de Turing No Determinista**: Permite configurar y simular una máquina de Turing con transiciones no deterministas.
- **Simulador de Máquina de Turing Universal (UTM)**: Permite configurar y simular una Máquina de Turing Universal, capaz de interpretar y ejecutar cualquier otra Máquina de Turing a través de su codificación.

Este proyecto está diseñado tanto para propósitos educativos como para servir como una herramienta de prueba para conceptos de teoría de la computación.

## Características

- **Interfaz Intuitiva**: Facilita la configuración de estados, alfabeto, transiciones y cadena de entrada.
- **Simulación Paso a Paso**: Permite visualizar el proceso de ejecución de la máquina de Turing en tiempo real.
- **Soporte para No Determinismo**: Permite múltiples transiciones para un mismo estado y símbolo leído.
- **Simulación de UTM**: Capaz de interpretar y ejecutar cualquier máquina de Turing codificada.
- **Ejemplos Predefinidos**: Incluye ejemplos para iniciar rápidamente con simulaciones de prueba.
- **Resultados Detallados**: Muestra los pasos de la simulación y el resultado final (aceptación o rechazo de la cadena).

## Instalación

### Prerrequisitos

- **Node.js**: Asegúrate de tener Node.js instalado. Puedes descargarlo desde [Node.js](https://nodejs.org/).
- **Angular CLI**: Instala Angular CLI globalmente si aún no lo tienes:

  ```bash
  npm install -g @angular/cli
Clonar el Repositorio
Clona el repositorio a tu máquina local:

bash
Copy code
git clone https://github.com/bum-spark/examenTuring.git
cd examenTuring
Instalar Dependencias
Instala las dependencias necesarias usando npm:

bash
Copy code
npm install
Uso
Ejecutar la Aplicación
Para iniciar la aplicación en modo de desarrollo, usa:

bash
Copy code
ng serve
Luego, abre tu navegador y navega a http://localhost:4200/. La aplicación se recargará automáticamente si haces cambios en los archivos fuente.

Simulador de Máquina de Turing No Determinista
Acceder al Simulador: Desde la interfaz principal, navega a la sección de Máquina de Turing No Determinista.

Configurar la Máquina:

Estados: Ingresa los estados separados por comas, por ejemplo: q0, q1, q2, q3.
Alfabeto de la Cinta: Ingresa los símbolos del alfabeto separados por comas, por ejemplo: 0,1,_.
Estado Inicial: Define el estado inicial, por ejemplo: q0.
Estados de Aceptación: Define los estados de aceptación separados por comas, por ejemplo: q3.
Cadena de Entrada: Ingresa la cadena que deseas procesar, por ejemplo: 11111.
Definir Transiciones:

Agrega las transiciones especificando:
Estado Actual: Estado en el que se encuentra la máquina.
Símbolo Leído: Símbolo que lee en la cinta.
Nuevo Estado: Estado al que cambia.
Símbolo Escrito: Símbolo que escribe en la cinta.
Dirección de Movimiento: Dirección en la que se mueve la cabeza de lectura/escritura (L para izquierda, R para derecha).
Alternativamente, haz clic en Rellenar con Ejemplo para cargar una configuración de ejemplo predefinida.
Simular:

Haz clic en el botón Simular para iniciar la simulación.
Observa los resultados en la sección de resultados, donde se mostrarán los pasos de la simulación y si la cadena es aceptada o no.
Simulador de Máquina de Turing Universal (UTM)
Acceder al Simulador: Desde la interfaz principal, navega a la sección de Máquina de Turing Universal.

Configurar la Máquina:

Estados: Ingresa los estados separados por comas, por ejemplo: q0,q1,q2,q_aceptar.
Alfabeto de la Cinta: Ingresa los símbolos del alfabeto separados por comas, por ejemplo: 0,1,B.
Estado Inicial: Define el estado inicial, por ejemplo: q0.
Estados de Aceptación: Define los estados de aceptación separados por comas, por ejemplo: q_aceptar.
Cadena de Entrada: Ingresa la cadena que deseas procesar, por ejemplo: 111.
Definir Transiciones:

Utiliza el formulario para agregar transiciones especificando:
Estado Actual: Estado en el que se encuentra la máquina.
Símbolo Leído: Símbolo que lee en la cinta.
Siguiente Estado: Estado al que cambia.
Símbolo Escrito: Símbolo que escribe en la cinta.
Dirección de Movimiento: Dirección en la que se mueve la cabeza de lectura/escritura (L para izquierda, R para derecha).
Alternativamente, haz clic en Rellenar con Ejemplo para cargar una configuración de ejemplo predefinida.
Simular:

Haz clic en el botón Simular para iniciar la simulación.
Observa los resultados en la sección de resultados, donde se mostrarán los pasos de la simulación y si la cadena es aceptada o no.
Estructura del Proyecto
El proyecto está organizado en componentes de Angular, cada uno encargado de simular diferentes tipos de Máquinas de Turing.

Componentes Principales:

NodeterministaComponent: Simulador de Máquina de Turing No Determinista.
UtmComponent: Simulador de Máquina de Turing Universal.
Archivos de Prueba:

utm.component.spec.ts: Pruebas unitarias para el componente UtmComponent.
Otros archivos de prueba para los diferentes componentes.
Contribución
¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, sigue estos pasos:

Fork el Repositorio
Crea una Rama de Característica (git checkout -b feature/nueva-feature)
Realiza tus Cambios
Confirma tus Cambios (git commit -m 'Agregar nueva feature')
Push a la Rama (git push origin feature/nueva-feature)
Abre un Pull Request
Asegúrate de seguir las Directrices de Contribución si existen.

Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

Contacto
Para cualquier consulta o comentario, puedes contactarme a través de [tu email o perfil de GitHub].

markdown
Copy code

### Explicación de las Secciones

1. **Título y Badges**: Incluye el nombre del proyecto y badges para la licencia y la versión de Angular utilizada.

2. **Descripción**: Explica brevemente qué es el proyecto y qué funcionalidades principales ofrece, enfocándose en los simuladores de Máquinas de Turing No Deterministas y Universales.

3. **Características**: Enumera las características clave del proyecto, resaltando la interfaz intuitiva, la capacidad de simulación paso a paso, el soporte para no determinismo, etc.

4. **Instalación**:
   - **Prerrequisitos**: Indica las herramientas necesarias como Node.js y Angular CLI.
   - **Clonar el Repositorio**: Proporciona los comandos para clonar el repositorio y navegar a la carpeta del proyecto.
   - **Instalar Dependencias**: Instrucciones para instalar las dependencias usando `npm`.

5. **Uso**:
   - **Ejecutar la Aplicación**: Comando para iniciar la aplicación en modo de desarrollo.
   - **Simulador de Máquina de Turing No Determinista**: Guía paso a paso sobre cómo configurar y usar el simulador.
   - **Simulador de Máquina de Turing Universal (UTM)**: Similar a la sección anterior, pero enfocada en la UTM.

6. **Estructura del Proyecto**: Describe cómo está organizado el proyecto, mencionando los componentes principales y los archivos de prueba.

7. **Contribución**: Proporciona una guía para contribuir al proyecto, incluyendo pasos básicos para hacer un fork, crear una rama, realizar cambios y enviar un pull request.

8. **Licencia**: Especifica la licencia del proyecto, en este caso, MIT.

9. **Contacto**: Proporciona información sobre cómo contactar al mantenedor del proyecto para consultas o comentarios.

### Recomendaciones Adicionales

- **Incluir Ejemplos**: Puedes considerar agregar una sección con capturas de pantalla o GIFs animados que muestren cómo se ve la interfaz y cómo funciona la simulación.

- **Documentación Detallada**: Si el proyecto crece, podrías agregar un apartado de documentación más detallada o enlazar a un wiki.

- **Sección de Preguntas Frecuentes (FAQ)**: Ayuda a resolver dudas comunes de los usuarios.

- **Contribuciones Específicas**: Si tienes guías de estilo de código o pruebas específicas, añádelas en el archivo `CONTRIBUTING.md` y menciónalo en la sección de contribución.

- **Automatización de Tests**: Describe cómo ejecutar las pruebas unitarias si las hay.

### Personalización

Asegúrate de personalizar las secciones de contacto y verificar que los comandos y descripciones coincidan exactamente con tu proyecto. También, si tienes una guía de contribución específica o un archivo de licencia diferente, actualiza las referencias correspondientes.

Espero que este `README.md` te sea de ayuda para tu repositorio. Si necesitas más asistencia o deseas agregar 
