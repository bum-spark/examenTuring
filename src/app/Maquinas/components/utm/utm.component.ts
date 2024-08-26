import { Component } from '@angular/core';

interface TransicionUniversal {
  estadoActual: string;
  simboloLeido: string;
  siguienteEstado: string;
  simboloEscrito: string;
  direccionMovimiento: 'L' | 'R';
}

@Component({
  selector: 'app-utm',
  templateUrl: './utm.component.html',
  styleUrls: ['./utm.component.css']
})
export class UtmComponent {

  estadosUniversales: string[] = [];
  alfabetoUniversal: string[] = [];
  transicionesUniversales: TransicionUniversal[] = [];
  estadoInicialUniversal: string = '';
  estadosDeAceptacionUniversales: string[] = [];
  cadenaEntradaUniversal: string = '';
  resultadoUniversal: string[] = [];

  // Autómata de ejemplo
  rellenarConEjemplo() {
    this.estadosUniversales = ['q0', 'q1', 'q2', 'q_aceptar'];
    this.alfabetoUniversal = ['0', '1', 'B'];
    this.estadoInicialUniversal = 'q0';
    this.estadosDeAceptacionUniversales = ['q_aceptar'];
    this.cadenaEntradaUniversal = '111';
    this.transicionesUniversales = [
      { estadoActual: 'q0', simboloLeido: '1', siguienteEstado: 'q1', simboloEscrito: 'B', direccionMovimiento: 'R' },
      { estadoActual: 'q1', simboloLeido: '1', siguienteEstado: 'q1', simboloEscrito: 'B', direccionMovimiento: 'R' },
      { estadoActual: 'q1', simboloLeido: 'B', siguienteEstado: 'q2', simboloEscrito: '1', direccionMovimiento: 'L' },
      { estadoActual: 'q2', simboloLeido: 'B', siguienteEstado: 'q_aceptar', simboloEscrito: '1', direccionMovimiento: 'R' }
    ];
  }

  agregarTransicionUniversal() {
    this.transicionesUniversales.push({
      estadoActual: '',
      simboloLeido: '',
      siguienteEstado: '',
      simboloEscrito: '',
      direccionMovimiento: 'R'
    });
  }

  simularUniversal() {
    this.resultadoUniversal = [];
    console.log(`Iniciando simulación con entrada: ${this.cadenaEntradaUniversal}`);
    this.simularUniversalRecursivo(this.cadenaEntradaUniversal.split(''), this.estadoInicialUniversal, 0, []);
    if (this.resultadoUniversal.length === 0) {
      this.resultadoUniversal.push('No se encontró ningún resultado. Verifica las transiciones y vuelve a intentarlo.');
    }
  }

  simularUniversalRecursivo(cinta: string[], estadoActual: string, posicionCabeza: number, camino: string[]) {
    console.log(`Estado Actual: ${estadoActual}, Posición de la Cabeza: ${posicionCabeza}, Cinta: ${cinta.join('')}`);
    camino.push(`Estado: ${estadoActual}, Cinta: ${cinta.join('')}, Cabeza: ${posicionCabeza}`);
    
    if (this.estadosDeAceptacionUniversales.includes(estadoActual)) {
      this.resultadoUniversal.push(`Aceptado: ${camino.join(' -> ')}`);
      return;
    }
    
    const simboloActual = cinta[posicionCabeza];
    let transicionEncontrada = false;

    for (const transicion of this.transicionesUniversales) {
      console.log(`Revisando transición: Desde ${transicion.estadoActual} si lee ${transicion.simboloLeido}`);
      if (transicion.estadoActual === estadoActual && transicion.simboloLeido === simboloActual) {
        transicionEncontrada = true;
        const nuevaCinta = [...cinta];
        nuevaCinta[posicionCabeza] = transicion.simboloEscrito;
        let nuevaPosicionCabeza = transicion.direccionMovimiento === 'R' ? posicionCabeza + 1 : posicionCabeza - 1;

        // Expande la cinta si la cabeza se mueve fuera de los límites
        if (nuevaPosicionCabeza < 0) {
          nuevaCinta.unshift('B');
          nuevaPosicionCabeza = 0;
        } else if (nuevaPosicionCabeza >= nuevaCinta.length) {
          nuevaCinta.push('B');
        }

        console.log(`Transición: Desde ${estadoActual} a ${transicion.siguienteEstado} con ${simboloActual} -> ${transicion.simboloEscrito}, Moviendo ${transicion.direccionMovimiento}`);
        this.simularUniversalRecursivo(nuevaCinta, transicion.siguienteEstado, nuevaPosicionCabeza, [...camino]);
        return; // Retorna después de encontrar y ejecutar una transición válida
      }
    }

    if (!transicionEncontrada) {
      console.log(`No se encontró una transición válida desde el estado ${estadoActual} leyendo el símbolo ${simboloActual}`);
      this.resultadoUniversal.push(`No se encontró una transición válida desde el estado ${estadoActual} leyendo el símbolo ${simboloActual}`);
    }
  }
}
