import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/servicios/dummy.service';
import { Employee } from 'src/app/modelo/employee';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  consulta = null;
  id :number ;
  ipc:number;

 // empleado : Employee = {id:0,employee_name:'',employee_salary: 0,employee_age:0 ,profile_image:''}

  

  constructor(private ds:DummyService) { 
    
  }

  ngOnInit() {
  }




  ver1Empleado()
  {

      //this.ds.listadoCompleto().subscribe(lista=>{this.consulta=lista, console.log(this.consulta.data[this.id-1])});
      this.ds.listadoCompleto1().subscribe(lista=>{this.consulta=lista, this.consulta.data[this.id-1]});

  }


  

}
