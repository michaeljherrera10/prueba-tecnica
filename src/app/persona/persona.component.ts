
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
  @Output() ordenOcultarPersona = new EventEmitter<boolean>();
  paises: any = Paises
  jPaises:any =this.paises.default
  departamentos: any = Departamentos
  jDepartamentos: any = this.departamentos.default
  ciudades: any = Ciudades
  jCiudades: any = this.ciudades.default
  arrayDepartamentos: any


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
    console.log("json paises", this.jPaises)
    console.log("json departamentos", this.jDepartamentos)
    console.log("json ciudades", this.jCiudades)
    
  }


  onSubmit(customerData: any) {
    this.submitted = true;
    console.log('si esta valido personas?', this.checkoutForm.valid )
    if (this.checkoutForm.valid) {
      this.submitted = false;
      this.ocultarFormPersona= true
      this.ordenOcultarPersona.emit(this.ocultarFormPersona)
    }

  }
  
  filtrarDepartamento(){
    console.log("valor de pais",this.checkoutForm.controls['pais'].value)
    this.arrayDepartamentos = this.jDepartamentos.filter((i:any) => i.idPais === parseInt(this.checkoutForm.controls['pais'].value))
    console.log(this.arrayDepartamentos )
    
  }

}

interface paises {
  idPais: Number,
  nombre: String,
  capital: string
}
