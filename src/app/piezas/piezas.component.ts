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
  total: number
  
  

  @Output() ordenOcultarPiezas = new EventEmitter<any>();
  @Output() ordenRetrocederPiezas= new EventEmitter<boolean>()
 


  constructor(private formBuilder: FormBuilder,) { 
    this.checkoutFormPiezas = this.formBuilder.group({
      cantidad: ['', Validators.required],
      descripcionPieza: ['', Validators.required],
      precioUnitario:['', Validators.required],
     
    })
  }

  ngOnInit() {
  }

  onSubmit(customerData: any) {
    this.submitted = true;
    
    console.log('esta valido el componente piezas?', customerData )
    if (this.checkoutFormPiezas.valid) {
      this.total= customerData.precioUnitario * customerData.cantidad;
      customerData.total=this.total
      this.submitted = false;
      this.ocultarFormPiezas= true
      this.ordenOcultarPiezas.emit({ocultarPiezas:this.ocultarFormPiezas, jsonPiezas:customerData})

    }
    

    console.warn('Your order has been submitted', customerData);
  }

  retrocederPiezasAPersonas(){
    this.ordenRetrocederPiezas.emit(true)  
  }

 

}
