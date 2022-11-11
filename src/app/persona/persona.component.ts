
import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import * as Paises from '../../app/data/paises.json'
import * as Departamentos from '../../app/data/departamentos.json'
import * as Ciudades from '../../app/data/ciudades.json'



@Component({
  selector: 'app-persona', 
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],

  
})
export class PersonaComponent implements OnInit {
  ocultarFormPersona: boolean= true;
  items: any;
  checkoutForm: FormGroup;
  message: string = "Hola Mundo!"
  submitted: boolean = false;
  @Output() ordenOcultarPersona = new EventEmitter<any>();
  paises: any = Paises;
  jPaises:any =this.paises.default;
  departamentos: any = Departamentos;
  jDepartamentos: any = this.departamentos.default;
  ciudades: any = Ciudades;
  jCiudades: any = this.ciudades.default;
  arrayDepartamentos: any;
  arrayCiudades: any;
 
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nit:['', Validators.required],
      pais:['', Validators.required],
      departamento:['', Validators.required],
      ciudad:['', Validators.required],
      tipoDeDireccion:['', Validators.required],
      descripcionDireccion:['', Validators.required],
    });
    
  }


  onSubmit(customerData: any) {
    this.submitted = true;
    if (this.checkoutForm.valid) {
      this.submitted = false;
      this.ocultarFormPersona= true
      this.ordenOcultarPersona.emit({ocultarPersona:this.ocultarFormPersona, jsonPersonas:customerData})
    }
    
  }
  
  filtrarDepartamento(){
    this.arrayDepartamentos = this.jDepartamentos.filter((i:any) => i.idPais === parseInt(this.checkoutForm.controls['pais'].value))
    this.arrayCiudades=[]
  }

  filtrarCiudad(){
    this.arrayCiudades = this.jCiudades.filter((i:any) => i.idDepartamento === parseInt(this.checkoutForm.controls['departamento'].value))
    
  }

}

interface paises {
  idPais: Number,
  nombre: String,
  capital: string
}
