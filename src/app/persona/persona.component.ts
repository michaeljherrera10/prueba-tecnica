import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
    items: any;
    checkoutForm: any;
  constructor(private formBuilder: FormBuilder,) { 
    this.checkoutForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      nit:['', Validators.required],
      pais:['', Validators.required],
      departamento:['', Validators.required],
      ciudad:['', Validators.required],
    });
    
  }

  ngOnInit() {
  }

  onSubmit(customerData) {

    console.warn('Your order has been submitted', customerData);
  }

}
