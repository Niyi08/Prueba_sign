export interface RegistroProfesor {
    id_profesor?: string;
    nombres?: string;
    apellidos?:string;
    correo?:string;
    password?:string;
}

export interface InicioSesionProfesor {
    id_profesor?: string;
    password?:string;
    token?: any;
}

export interface RegistroEstudiante {
    id_estudiante?: string;
    nombres?: string;
    apellidos?:string;
    correo?:string;
    password?:string;
    id_curso?:string;
}

export interface EstudianteDTO {
    id_estudiante?: string;
    nombres?: string;
    apellidos?:string;
    correo?:string;
    id_curso?:string;
}


export interface InicioSesionEstudiante {
    id_estudiante?: string;
    password?:string;
    token?: any;
}