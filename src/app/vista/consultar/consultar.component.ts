import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/servicios/dummy.service';

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  consulta = null;
  id :number ;
  ipc:number;



  constructor(private ds:DummyService) { 
    
  }

  ngOnInit() {
  }




  ver1Empleado()
  {
      //aquí nos trae la consulta especifica de la Api que queremos mostrar por connsola y para el componente html
      //this.ds.listadoCompleto().subscribe(lista=>{this.consulta=lista, console.log(this.consulta.data[this.id-1])});
     
      //aquí nos trae la consulta especifica de la Api que usaremos en el componente html.
      this.ds.listadoCompleto().subscribe(lista=>{this.consulta=lista, this.consulta.data[this.id-1]});

  }


  

}
