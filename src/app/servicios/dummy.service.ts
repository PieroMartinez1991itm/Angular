import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../modelo/employee';


@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http:HttpClient) { }


  listadoCompleto()
  {

    const path = 'http://dummy.restapiexample.com/api/v1/employees';

    return this.http.get<Employee>(path);

  }
  listadoCompleto1()
  {

    const path = 'http://dummy.restapiexample.com/api/v1/employees';

    return this.http.get<Employee>(path);

  }

  listar1Employee(id:string)
  {

    const path = 'http://dummy.restapiexample.com/api/v1/employee/'+id;

    return this.http.get<Employee>(path);

  }






}
