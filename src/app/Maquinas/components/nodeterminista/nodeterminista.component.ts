import { Component } from '@angular/core';

interface Transicion {
  estadoActual: string;
  simboloLeido: string;
  nuevoEstado: string;
  simboloEscrito: string;
  direccion: string; // 'L' para izquierda, 'R' para derecha
}

interface ConfiguracionCinta {
  cinta: string[];
  posicionCabeza: number;
  estadoActual: string;
}

@Component({
  selector: 'app-nodeterminista',
  templateUrl: './nodeterminista.component.html',
  styleUrls: ['./nodeterminista.component.css']
})
export class NodeterministaComponent {
  estados: string[] = [];
  alfabetoCinta: string[] = [];
  transiciones: Transicion[] = [];
  estadoInicial: string = '';
  estadosAceptacion: string[] = [];
  cadenaEntrada: string = '';
  resultado: string[] = [];
  
  // Campos auxiliares para mostrar las transiciones en la interfaz
  transicionesTexto: string = '';

  automataEjemplo() {
    this.estados = ['q0', 'q1', 'q2', 'q3'];
    this.alfabetoCinta = ['0', '1', '_'];
    this.transiciones = [
      { estadoActual: 'q0', simboloLeido: '0', nuevoEstado: 'q1', simboloEscrito: '1', direccion: 'R' },
      { estadoActual: 'q0', simboloLeido: '1', nuevoEstado: 'q2', simboloEscrito: '0', direccion: 'R' },
      { estadoActual: 'q2', simboloLeido: '1', nuevoEstado: 'q2', simboloEscrito: '1', direccion: 'R' },
      { estadoActual: 'q2', simboloLeido: '_', nuevoEstado: 'q3', simboloEscrito: '_', direccion: 'R' },
      { estadoActual: 'q3', simboloLeido: '_', nuevoEstado: 'q3', simboloEscrito: '_', direccion: 'R' }
    ];
    this.estadoInicial = 'q0';
    this.estadosAceptacion = ['q3'];
    this.cadenaEntrada = '11111';
    
    // Convertir transiciones a cadena para mostrar en la interfaz
    this.transicionesTexto = this.transiciones.map(t => 
      `${t.estadoActual},${t.simboloLeido},${t.nuevoEstado},${t.simboloEscrito},${t.direccion}`
    ).join('; ');
    
    this.resultado = [];
  }

  simular() {
    const cintaInicial: string[] = this.cadenaEntrada.split('');
    const configuracionInicial: ConfiguracionCinta = {
      cinta: [...cintaInicial],
      posicionCabeza: 0,
      estadoActual: this.estadoInicial
    };
    
    this.resultado = [];
    this.procesarConfiguracion(configuracionInicial);
  }

  procesarConfiguracion(configuracion: ConfiguracionCinta) {
    const { cinta, posicionCabeza, estadoActual } = configuracion;
    const simboloActual = cinta[posicionCabeza] || '_'; // Asumiendo '_' es el símbolo en blanco

    this.resultado.push(`Estado actual: ${estadoActual}, Cabeza en: ${posicionCabeza}, Símbolo leído: ${simboloActual}`);
    
    if (this.estadosAceptacion.includes(estadoActual)) {
      this.resultado.push(`Cadena aceptada en el estado ${estadoActual}.`);
      return;
    }

    const transicionesPosibles = this.transiciones.filter(
      transicion => transicion.estadoActual === estadoActual && transicion.simboloLeido === simboloActual
    );

    if (transicionesPosibles.length === 0) {
      this.resultado.push(`No hay transiciones posibles desde el estado ${estadoActual} con el símbolo ${simboloActual}.`);
      return;
    }

    transicionesPosibles.forEach(transicion => {
      const nuevaCinta = [...cinta];
      nuevaCinta[posicionCabeza] = transicion.simboloEscrito;
      const nuevaPosicionCabeza = transicion.direccion === 'R' ? posicionCabeza + 1 : posicionCabeza - 1;
      const nuevaConfiguracion: ConfiguracionCinta = {
        cinta: nuevaCinta,
        posicionCabeza: nuevaPosicionCabeza,
        estadoActual: transicion.nuevoEstado
      };
      
      this.resultado.push(`Aplicando transición: (${transicion.estadoActual}, ${transicion.simboloLeido}) -> (${transicion.nuevoEstado}, ${transicion.simboloEscrito}, ${transicion.direccion})`);
      this.procesarConfiguracion(nuevaConfiguracion);
    });
  }
}
