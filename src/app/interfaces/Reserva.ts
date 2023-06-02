export interface Reserva{
    nombre:String,
    apellido:string,
    telefono:number,
    fechaInicio:Date,
    fechaFinal:Date,
    cantidadPersonas:number,
    idHabitacion:string,
    costoReserva?:number
}