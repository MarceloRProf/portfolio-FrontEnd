export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    descripcion:string;
    banner: string;

    constructor(nombre: string,apellido: string, img: string, descripcion: string, banner: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.banner = banner 
    }

}