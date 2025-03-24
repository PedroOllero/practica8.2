type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//Apartado 1A

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra"
  );
  return pacientesPediatria;
};

let pacientesPediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log(pacientesPediatria);

//Apartado 1B

const obtenPacientesAsignadosAPediatriaMenorDiez = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesPediatria: Pacientes[] = pacientes.filter(
    (paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
  return pacientesPediatria;
};

let pacientesPediatriaMenorDiez =
  obtenPacientesAsignadosAPediatriaMenorDiez(pacientes);
console.log(pacientesPediatriaMenorDiez);

//Apartado 2

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean =>
  pacientes.some(
    (paciente) => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100
  );
let hayUrgencia = activarProtocoloUrgencia(pacientes);
console.log("Hay urgencias?", hayUrgencia);

//Apartado 3
const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const pacientesReasignados: Pacientes[] = pacientes.map((paciente) => {
    if (paciente.especialidad === "Pediatra") {
      return {
        ...paciente,
        especialidad: "Medico de familia",
      };
    }
    return paciente;
  });
  return pacientesReasignados;
};

let pacientesReasignados = reasignaPacientesAMedicoFamilia(pacientes);
console.log("Se ha reasignado los pacientes", pacientesReasignados);

//Apartado 4

const hayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((paciente) => paciente.especialidad === "Pediatra");
};

let hayPacientes: boolean = hayPacientesDePediatria(pacientes);
console.log("Hay pacientes de Pediatria?", hayPacientes);

//Apartado 5
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  let numeroPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: 0,
    pediatria: 0,
    cardiologia: 0,
  };
  pacientes.map((paciente) => {
    switch (paciente.especialidad) {
      case "Cardiólogo":
        numeroPacientes.cardiologia++;
        break;
      case "Medico de familia":
        numeroPacientes.medicoDeFamilia++;
        break;
      case "Pediatra":
        numeroPacientes.pediatria++;
        break;
    }
  });
  return numeroPacientes;
};

let especialidadPacientes = cuentaPacientesPorEspecialidad(pacientes);
console.log(especialidadPacientes);