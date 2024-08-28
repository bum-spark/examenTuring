import { Component } from '@angular/core';

// Interfaz que define una transición en la Máquina de Turing Universal
interface TransicionUniversal {
  estadoActual: string;             // Estado en el que se encuentra la máquina
  simboloLeido: string;             // Símbolo que la máquina lee en la cinta
  siguienteEstado: string;          // Estado al que la máquina se moverá después de leer el símbolo
  simboloEscrito: string;           // Símbolo que la máquina escribirá en la cinta
  direccionMovimiento: 'L' | 'R';   // Dirección en la que la cabeza de lectura se moverá ('L' para izquierda, 'R' para derecha)
}

@Component({
  selector: 'app-utm',               
  templateUrl: './utm.component.html',  
  styleUrls: ['./utm.component.css']    
})
export class UtmComponent {

  // Variables que almacenan los estados, alfabeto, transiciones, y más
  estadosUniversales: string[] = [];                  // Lista de estados de la máquina universal
  alfabetoUniversal: string[] = [];                   // Alfabeto que la máquina puede leer y escribir en la cinta
  transicionesUniversales: TransicionUniversal[] = [];// Lista de transiciones que definen el comportamiento de la máquina
  estadoInicialUniversal: string = '';                // Estado inicial de la máquina
  estadosDeAceptacionUniversales: string[] = [];      // Estados en los que la máquina acepta la cadena
  cadenaEntradaUniversal: string = '';                // Cadena de entrada que la máquina procesará
  resultadoUniversal: string[] = [];                  // Resultado de la simulación (pasos realizados)

  rellenarConEjemplo() {
    this.estadosUniversales = ['q0', 'q1', 'q2', 'q_aceptar']; // Definición de estados
    this.alfabetoUniversal = ['0', '1', 'B'];                  // Definición del alfabeto de la cinta ('B' es el símbolo en blanco)
    this.estadoInicialUniversal = 'q0';                        // Estado inicial de la máquina
    this.estadosDeAceptacionUniversales = ['q_aceptar'];       // Estados de aceptación
    this.cadenaEntradaUniversal = '111';                       // Cadena de entrada que se va a procesar
    this.transicionesUniversales = [                           // Definición de transiciones de la máquina
      { estadoActual: 'q0', simboloLeido: '1', siguienteEstado: 'q1', simboloEscrito: 'B', direccionMovimiento: 'R' },
      { estadoActual: 'q1', simboloLeido: '1', siguienteEstado: 'q1', simboloEscrito: 'B', direccionMovimiento: 'R' },
      { estadoActual: 'q1', simboloLeido: 'B', siguienteEstado: 'q2', simboloEscrito: '1', direccionMovimiento: 'L' },
      { estadoActual: 'q2', simboloLeido: 'B', siguienteEstado: 'q_aceptar', simboloEscrito: '1', direccionMovimiento: 'R' }
    ];
  }

 
  agregarTransicionUniversal() {
    this.transicionesUniversales.push({
      estadoActual: '',            // Estado actual de la nueva transición
      simboloLeido: '',            // Símbolo que la máquina leerá en esta transición
      siguienteEstado: '',         // Estado al que se moverá la máquina después de esta transición
      simboloEscrito: '',          // Símbolo que se escribirá en la cinta
      direccionMovimiento: 'R'     // Dirección en la que se moverá la cabeza
    });
  }

  // Método para iniciar la simulación de la Máquina de Turing Universal
  simularUniversal() {
    this.resultadoUniversal = [];  // Limpia los resultados anteriores
    console.log(`Iniciando simulación con entrada: ${this.cadenaEntradaUniversal}`);
    this.simularUniversalRecursivo(this.cadenaEntradaUniversal.split(''), this.estadoInicialUniversal, 0, []);
    if (this.resultadoUniversal.length === 0) {
      this.resultadoUniversal.push('No se encontró ningún resultado. Verifica las transiciones y vuelve a intentarlo.');
    }
  }

  // Método recursivo para procesar la cinta y avanza en la simulación
  simularUniversalRecursivo(cinta: string[], estadoActual: string, posicionCabeza: number, camino: string[]) {
    console.log(`Estado Actual: ${estadoActual}, Posición de la Cabeza: ${posicionCabeza}, Cinta: ${cinta.join('')}`);
    camino.push(`Estado: ${estadoActual}, Cinta: ${cinta.join('')}, Cabeza: ${posicionCabeza}`);
    
    // Verifica si el estado actual es un estado de aceptación
    if (this.estadosDeAceptacionUniversales.includes(estadoActual)) {
      this.resultadoUniversal.push(`Aceptado: ${camino.join(' -> ')}`);
      return;
    }
    
    const simboloActual = cinta[posicionCabeza];  // Lee el símbolo actual de la cinta
    let transicionEncontrada = false;

    // Busca una transición válida desde el estado actual con el símbolo leído
    for (const transicion of this.transicionesUniversales) {
      console.log(`Revisando transición: Desde ${transicion.estadoActual} si lee ${transicion.simboloLeido}`);
      if (transicion.estadoActual === estadoActual && transicion.simboloLeido === simboloActual) {
        transicionEncontrada = true;
        const nuevaCinta = [...cinta];  // Crea una copia de la cinta
        nuevaCinta[posicionCabeza] = transicion.simboloEscrito;  // Escribe el nuevo símbolo en la cinta
        let nuevaPosicionCabeza = transicion.direccionMovimiento === 'R' ? posicionCabeza + 1 : posicionCabeza - 1;

        // Expande la cinta si la cabeza se mueve fuera de los límites
        if (nuevaPosicionCabeza < 0) {
          nuevaCinta.unshift('B');  // Agrega un símbolo en blanco al inicio de la cinta
          nuevaPosicionCabeza = 0;
        } else if (nuevaPosicionCabeza >= nuevaCinta.length) {
          nuevaCinta.push('B');  // Agrega un símbolo en blanco al final de la cinta
        }

        console.log(`Transición: Desde ${estadoActual} a ${transicion.siguienteEstado} con ${simboloActual} -> ${transicion.simboloEscrito}, Moviendo ${transicion.direccionMovimiento}`);
        this.simularUniversalRecursivo(nuevaCinta, transicion.siguienteEstado, nuevaPosicionCabeza, [...camino]);  // Llama recursivamente para seguir simulando
        return;  // Retorna después de encontrar y ejecutar una transición válida
      }
    }

    // Si no se encontró una transición válida, registrar el fallo
    if (!transicionEncontrada) {
      console.log(`No se encontró una transición válida desde el estado ${estadoActual} leyendo el símbolo ${simboloActual}`);
      this.resultadoUniversal.push(`No se encontró una transición válida desde el estado ${estadoActual} leyendo el símbolo ${simboloActual}`);
    }
  }
}
