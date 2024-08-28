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

    git clone https://github.com/bum-spark/examenTuring.git
    cd examenTuring


## Instalar Dependencias
Instala las dependencias necesarias usando npm:

    npm install

## Uso
Ejecutar la Aplicación
Para iniciar la aplicación en modo de desarrollo, usa:

    ng serve
Luego, abre tu navegador y navega a http://localhost:4200/. La aplicación se recargará automáticamente si haces cambios en los archivos fuente.

# Simulador de Máquina de Turing No Determinista
Acceder al Simulador: Desde la interfaz principal, navega a la sección de Máquina de Turing No Determinista.
## Configurar la Máquina:
- **Estados**: Ingresa los estados separados por comas, por ejemplo: q0, q1, q2, q3.
- **Alfabeto de la Cinta**: Ingresa los símbolos del alfabeto separados por comas, por ejemplo: 0,1,_.
- **Estado Inicial**: Define el estado inicial, por ejemplo: q0.
- **Estados de Aceptación**: Define los estados de aceptación separados por comas, por ejemplo: q3.
- **Cadena de Entrada**: Ingresa la cadena que deseas procesar, por ejemplo: 11111.

## Definir Transiciones:
Agrega las transiciones especificando*:
- **Estado Actual**: Estado en el que se encuentra la máquina.
- **Símbolo Leído**: Símbolo que lee en la cinta.
- **Nuevo Estado**: Estado al que cambia.
- **Símbolo Escrito**: Símbolo que escribe en la cinta.
- **Dirección de Movimiento**: Dirección en la que se mueve la cabeza de lectura/escritura (L para izquierda, R para derecha).
Alternativamente, haz clic en Rellenar con Ejemplo para cargar una configuración de ejemplo predefinida.

## Simular:
Haz clic en el botón **Simular** para iniciar la simulación.
Observa los resultados en la sección de resultados, donde se mostrarán los pasos de la simulación y si la cadena es aceptada o no.


# Simulador de Máquina de Turing Universal (UTM)
Acceder al Simulador: Desde la interfaz principal, navega a la sección de Máquina de Turing Universal.

## Configurar la Máquina:
- **Estados**: Ingresa los estados separados por comas, por ejemplo: q0,q1,q2,q_aceptar.
- **Alfabeto de la Cinta**: Ingresa los símbolos del alfabeto separados por comas, por ejemplo: 0,1,B.
- **Estado Inicial**: Define el estado inicial, por ejemplo: q0.
- **Estados de Aceptación**: Define los estados de aceptación separados por comas, por ejemplo: q_aceptar.
- **Cadena de Entrada**: Ingresa la cadena que deseas procesar, por ejemplo: 111.

## Definir Transiciones:
Utiliza el formulario para agregar transiciones especificando:
- **Estado Actual**: Estado en el que se encuentra la máquina.
- **Símbolo Leído**: Símbolo que lee en la cinta.
- **Siguiente Estado**: Estado al que cambia.
- **Símbolo Escrito**: Símbolo que escribe en la cinta.
- **Dirección de Movimiento**: Dirección en la que se mueve la cabeza de lectura/escritura (L para izquierda, R para derecha).
Alternativamente, haz clic en Rellenar con Ejemplo para cargar una configuración de ejemplo predefinida.

## Simular:

Haz clic en el botón Simular para iniciar la simulación.
Observa los resultados en la sección de resultados, donde se mostrarán los pasos de la simulación y si la cadena es aceptada o no.
Estructura del Proyecto
El proyecto está organizado en componentes de Angular, cada uno encargado de simular diferentes tipos de Máquinas de Turing.

# Componentes Principales:

**NodeterministaComponent**: Simulador de Máquina de Turing No Determinista.

**UtmComponent**: Simulador de Máquina de Turing Universal.

**NavBarComponent**: Navegador entre las diferentes simulaciones.

# Simulador de maquina
Desde este link puedes ver la mquina funcionando
[Simulador de maquina de Turing]([https://celadon-manatee-7923e4.netlify.app/]).
