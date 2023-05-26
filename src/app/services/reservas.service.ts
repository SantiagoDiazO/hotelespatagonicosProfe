import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  public url:string="https://apihotelesviernes2023.vercel.app"
  
  constructor(public servicioHabitacion:HttpClient) {  }

  public BuscarReservas():Observable<any>{
    let endpoint = "/buscarreservas"
    let uri = this.url+endpoint
    return this.servicioHabitacion.get(uri)
  }

  public BuscarReserva(){

  }

  public RegistrarReserva(){

  }

  public EditarReserva(){
    
  }

  public EliminarReserva(){
    
  }
}
