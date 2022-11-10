import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-piezas',
  templateUrl: './piezas.component.html',
  styleUrls: ['./piezas.component.css']
})
export class PiezasComponent implements OnInit {
  ocultarFormPiezas:boolean = true;
  checkoutFormPiezas: FormGroup;
  retrocederPiezas: boolean;
  submitted: boolean = false;
  
  

  @Output() ordenOcultarPiezas = new EventEmitter<any>();
  @Output() ordenRetrocederPiezas= new EventEmitter<boolean>()
  


  constructor(private formBuilder: FormBuilder,) { 
    this.checkoutFormPiezas = this.formBuilder.group({
      cantidad: ['', Validators.required],
      descripcionPieza: ['', Validators.required],
      precioUnitario:['', Validators.required],
      total:[''],
    })
  }

  ngOnInit() {
  }

  onSubmit(customerData: any) {
    this.submitted = true;
    console.log('esta valido el componente piezas?', this.checkoutFormPiezas.valid )
    if (this.checkoutFormPiezas.valid) {
      this.submitted = false;
      this.ocultarFormPiezas= true
      this.ordenOcultarPiezas.emit(this.ocultarFormPiezas)
    }

    console.warn('Your order has been submitted', customerData);
  }

  retrocederPiezasAPersonas(){
    this.ordenRetrocederPiezas.emit(true)  
  }

}
