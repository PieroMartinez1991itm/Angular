import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/servicios/dummy.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  consulta = null;
  
 

  constructor(private ds:DummyService) { 
    
  }

  ngOnInit() {
  }


  verListadoEmployees()
  {

    //cuando quise mostrar la lista que recogo de la Api y no me dejaba recorrerla como array, la pase a array.
    //this.ds.listadoCompleto().subscribe(lista=>{this.consulta=lista;this.consulta = Array.of(this.consulta)});
  
    //la solucion la hice en la parte html. recorriendo consulta.data donde ahi se ecnontraba la array de los objetos.
    this.ds.listadoCompleto().subscribe(lista=>{console.log(this.consulta=lista)});

  }



  

}