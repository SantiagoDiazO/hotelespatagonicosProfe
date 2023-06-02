import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-formularioreserva',
  templateUrl: './formularioreserva.component.html',
  styleUrls: ['./formularioreserva.component.css']
})
export class FormularioreservaComponent {
  public formulario:FormGroup
  public datosFormulario:any[] = []
  public constructor(public constructorFormulario:FormBuilder, public servicio:ReservasService){
    this.formulario = this.inicializarFormulario()
  }
  public inicializarFormulario():FormGroup{
    return this.constructorFormulario.group({
      nombre:[''],
      apellido:[''],
      telefono:[''],
      fechaInicio:[''],
      fechaFinal:[''],
      numeroPersonas:[''],
      idHabitacion:[''],
    })
  }

  public procesarDatos():void{
    let datos = this.formulario.value
    this.servicio.RegistrarReserva(datos).subscribe((respuesta)=>{
      console.log(respuesta)
    })
    console.log(datos)
  }
}
