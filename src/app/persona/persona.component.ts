import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, Validators, } from '@angular/forms';



@Component({
  selector: 'app-persona', 
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],

  
})
export class PersonaComponent implements OnInit {
    ocultarFormP: boolean= true;
    items: any;
    checkoutForm: any;
    message: string = "Hola Mundo!"
    
    @Output() ordenOcultar = new EventEmitter<boolean>();


  constructor(private formBuilder: FormBuilder,) { 
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

  ngOnInit() {
    let calle = "4b5"
    let cra = "1c sur"
    let complemento = "83"

    let direccion = "calle" + calle + "#" + cra + " - " + complemento
  }

  onSubmit(customerData: any) {
    console.log('si esta valido', this.checkoutForm.valid )
    if (this.checkoutForm.valid) {
      this.ocultarFormP= false
      this.ordenOcultar.emit(this.ocultarFormP)
    }
   

  }
}

interface paises {
  idPais: Number,
  nombre: String,
  capital: string
}
