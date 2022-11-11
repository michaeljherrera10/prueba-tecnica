
import {Component,Input,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { PiezasComponent } from './piezas/piezas.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 

})
export class AppComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  message: string;
  vMistaPersona: boolean = false;
  vMistaPiezas: boolean = false;
  atrasPiezas: boolean
  atrasResumen: boolean
  lista:any[] = [];
  objResumen: any = {}
  

  constructor(private _formBuilder: FormBuilder) {}


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
    
  }

  recibirOrdenPersona($event) {
    this.vMistaPersona=$event.ocultarPersona
    this.objResumen.nombre=$event.jsonPersonas.nombre
    this.objResumen.apellido=$event.jsonPersonas.apellido
    this.objResumen.nit=$event.jsonPersonas.nit
    this.objResumen.pais=$event.jsonPersonas.pais
    this.objResumen.departamento=$event.jsonPersonas.departamento
    this.objResumen.ciudad=$event.jsonPersonas.ciudad
    this.objResumen.tipoDeDireccion=$event.jsonPersonas.tipoDeDireccion
    this.objResumen.descripcionDireccion=$event.jsonPersonas.descripcionDireccion
    console.log("este es el mensaje persona:",this.objResumen)
  
  }
  

  recibirOrdenPiezas($event){
    this.vMistaPiezas=$event.ocultarPiezas
    this.objResumen.cantidad=$event.jsonPiezas.cantidad
    this.objResumen.descripcionPieza=$event.jsonPiezas.descripcionPieza
    this.objResumen.precioUnitario=$event.jsonPiezas.precioUnitario
    this.objResumen.total=$event.jsonPiezas.total
    console.log("este es el mensaje piezas:", this.objResumen)
   
  }

  recibirOdenRetrocederResumen($event){
    console.log("orden de retroceder resumen", $event)
    if($event==true){
      this.vMistaPersona=true
      this.vMistaPiezas=false
    }
  }

  recibirOdenRetrocederPiezas($event){
    console.log("orden de retroceder Piezas", $event)
    if($event){
      this.vMistaPersona=false
    }
  }

  
}
