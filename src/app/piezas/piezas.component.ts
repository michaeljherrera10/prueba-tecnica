import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-piezas',
  templateUrl: './piezas.component.html',
  styleUrls: ['./piezas.component.css']
})
export class PiezasComponent implements OnInit {
  items:any;
  checkoutFormP: any;

  constructor(private formBuilder: FormBuilder,) { 
    this.checkoutFormP = this.formBuilder.group({
      cantidad: ['', Validators.required],
      descripcionPieza: ['', Validators.required],
      precioUnitario:['', Validators.required],
      total:[''],
    })
  }

  ngOnInit() {
  }

  onSubmit(customerData: any) {

    console.warn('Your order has been submitted', customerData);
  }

}
