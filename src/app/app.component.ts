
import {Component,ViewChild} from '@angular/core';
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
  message:string;
  vMistaPersona:boolean=false;
  vMistaPiezas: boolean=false;
  atrasPiezas:boolean
  atrasResumen:boolean
  lista:any[]=[];
  
  
 

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
   console.log("este es el mensaje persona:", $event)
   this.vMistaPersona=$event
  
  }

  recibirOrdenPiezas($event){
    console.log("este es el mensaje piezas:", $event)
  this.vMistaPiezas=$event
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
