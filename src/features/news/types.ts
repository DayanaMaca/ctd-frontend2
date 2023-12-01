export interface INoticias {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: Date;
    esPremium: boolean;
    imagen: string;
}

// Interfaz para la estructura normalizada de las noticias
export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string; // Puede ser un número o una cadena (se deja flexible)
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string; // Campo opcional
}