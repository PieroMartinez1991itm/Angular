import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/servicios/dummy.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  consulta = null;
  
 //e:Employee = {id:'',employee_name:'',employee_salary:'',employee_age:'',profile_image:''}


  constructor(private ds:DummyService) { 
    
  }

  ngOnInit() {
  }


  verListadoEmployees()
  {

    //this.ds.listadoCompleto().subscribe(lista=>{this.consulta=lista;this.consulta = Array.of(this.consulta)});
    this.ds.listadoCompleto().subscribe(lista=>{console.log(this.consulta=lista)});

  }



  

}