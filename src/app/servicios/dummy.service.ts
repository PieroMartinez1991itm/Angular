import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../modelo/employee';


@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }

//listamos a todos los trabajadores del la Api mediante el servicio Json
  listadoCompleto()
  {

    const path = 'http://dummy.restapiexample.com/api/v1/employees';

    return this.http.get<Employee>(path);

  }
   

  //dejo el metodo que iba a usar para buscar un empleado segun su id, por fallos de la Api.
  listar1Employee(id:string)
  {

    const path = 'http://dummy.restapiexample.com/api/v1/employee/'+id;

    return this.http.get<Employee>(path);

  }






}
