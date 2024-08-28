import { Component } from '@angular/core';

interface Transicion {
  estadoActual: string;     // Estado en el que se encuentra la máquina
  simboloLeido: string;     // Símbolo que se lee en la cinta
  nuevoEstado: string;      // Nuevo estado al que se moverá la máquina
  simboloEscrito: string;   // Símbolo que se escribirá en la cinta
  direccion: string;        // Dirección hacia la que se moverá la cabeza lectora ('L' para izquierda, 'R' para derecha)
}

interface ConfiguracionCinta {
  cinta: string[];          // Representa la cinta de la máquina con los símbolos
  posicionCabeza: number;   // Indica la posición actual de la cabeza lectora en la cinta
  estadoActual: string;     // Estado actual de la máquina
}

@Component({
  selector: 'app-nodeterminista',           
  templateUrl: './nodeterminista.component.html',  
  styleUrls: ['./nodeterminista.component.css']    
})
export class NodeterministaComponent {
  estados: string[] = [];                     // Lista de estados de la máquina
  alfabetoCinta: string[] = [];               // Alfabeto que la máquina puede leer y escribir en la cinta
  transiciones: Transicion[] = [];            // Lista de todas las transiciones posibles de la máquina
  estadoInicial: string = '';                 // Estado inicial de la máquina
  estadosAceptacion: string[] = [];           // Estados en los que la máquina acepta la cadena de entrada
  cadenaEntrada: string = '';                 // Cadena que se va a procesar en la máquina
  resultado: string[] = [];                   // Resultado de la simulación (pasos realizados)

  // Campo auxiliar para mostrar las transiciones como texto en la interfaz
  transicionesTexto: string = '';

  // Método para inicializar un ejemplo
  automataEjemplo() {
    this.estados = ['q0', 'q1', 'q2', 'q3'];   // Definición de estados
    this.alfabetoCinta = ['0', '1', '_'];      // Definición del alfabeto de la cinta ('_' es el símbolo en blanco)
    this.transiciones = [                      // Definición de las transiciones de la máquina
      { estadoActual: 'q0', simboloLeido: '0', nuevoEstado: 'q1', simboloEscrito: '1', direccion: 'R' },
      { estadoActual: 'q0', simboloLeido: '1', nuevoEstado: 'q2', simboloEscrito: '0', direccion: 'R' },
      { estadoActual: 'q2', simboloLeido: '1', nuevoEstado: 'q2', simboloEscrito: '1', direccion: 'R' },
      { estadoActual: 'q2', simboloLeido: '_', nuevoEstado: 'q3', simboloEscrito: '_', direccion: 'R' },
      { estadoActual: 'q3', simboloLeido: '_', nuevoEstado: 'q3', simboloEscrito: '_', direccion: 'R' }
    ];
    this.estadoInicial = 'q0';                // Estado inicial de la máquina
    this.estadosAceptacion = ['q3'];          // Estados de aceptación
    this.cadenaEntrada = '11111';             // Cadena de entrada que se va a procesar
    
    // Convertir las transiciones a texto para mostrarlas en la interfaz
    this.transicionesTexto = this.transiciones.map(t => 
      `${t.estadoActual},${t.simboloLeido},${t.nuevoEstado},${t.simboloEscrito},${t.direccion}`
    ).join('; ');
    
    this.resultado = [];                      // Limpiar 
  }

  // Método para iniciar la simulación de la máquina de Turing
  simular() {
    // Dividir la cadena de entrada en un array de caracteres para representar la cinta
    const cintaInicial: string[] = this.cadenaEntrada.split('');
    
    // Configuración inicial de la cinta y la cabeza lectora
    const configuracionInicial: ConfiguracionCinta = {
      cinta: [...cintaInicial],               // Copiar la cinta inicial
      posicionCabeza: 0,                      // La cabeza lectora empieza en la primera posición
      estadoActual: this.estadoInicial        // Estado inicial de la máquina
    };
    
    this.resultado = [];                      // Limpiar el resultado anterior
    this.procesarConfiguracion(configuracionInicial);  // Procesar la configuración inicial
  }

  // Método recursivo para procesar cada configuración de la máquina de Turing
  procesarConfiguracion(configuracion: ConfiguracionCinta) {
    const { cinta, posicionCabeza, estadoActual } = configuracion;
    const simboloActual = cinta[posicionCabeza] || '_'; // Leer el símbolo actual de la cinta (usar '_' si no hay símbolo)

    // se agrega información sobre el estado actual al resultado
    this.resultado.push(`Estado actual: ${estadoActual}, Cabeza en: ${posicionCabeza}, Símbolo leído: ${simboloActual}`);
    
    // Verifica si el estado actual es un estado de aceptación
    if (this.estadosAceptacion.includes(estadoActual)) {
      this.resultado.push(`Cadena aceptada en el estado ${estadoActual}.`);
      return; // Detener la simulación si la cadena es aceptada
    }

    // Busca las transiciones posibles desde el estado actual con el símbolo leído
    const transicionesPosibles = this.transiciones.filter(
      transicion => transicion.estadoActual === estadoActual && transicion.simboloLeido === simboloActual
    );

    // Si no hay transiciones posibles, se detiene
    if (transicionesPosibles.length === 0) {
      this.resultado.push(`No hay transiciones posibles desde el estado ${estadoActual} con el símbolo ${simboloActual}.`);
      return;
    }

    // Para cada transición posible, se aplica la transición y continuar la simulación
    transicionesPosibles.forEach(transicion => {
      const nuevaCinta = [...cinta];  // Copiar la cinta actual
      nuevaCinta[posicionCabeza] = transicion.simboloEscrito;  // Escribir el nuevo símbolo en la cinta
      const nuevaPosicionCabeza = transicion.direccion === 'R' ? posicionCabeza + 1 : posicionCabeza - 1;  // Mover la cabeza
      const nuevaConfiguracion: ConfiguracionCinta = {
        cinta: nuevaCinta,                       // Actualiza la cinta
        posicionCabeza: nuevaPosicionCabeza,     // Actualiza la posición de la cabeza
        estadoActual: transicion.nuevoEstado     // Cambia al nuevo estado
      };
      
      // Agrega información sobre la transición aplicada al resultado
      this.resultado.push(`Aplicando transición: (${transicion.estadoActual}, ${transicion.simboloLeido}) -> (${transicion.nuevoEstado}, ${transicion.simboloEscrito}, ${transicion.direccion})`);
      this.procesarConfiguracion(nuevaConfiguracion);  // Procesar la nueva configuración recursivamente
    });
  }
}
