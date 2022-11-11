import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, OnInit,Output,EventEmitter, Input,} from '@angular/core';
import * as Paises from '../../app/data/paises.json'
import * as Departamentos from '../../app/data/departamentos.json'
import * as Ciudades from '../../app/data/ciudades.json'

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  retrocederResumen: boolean = true;
  datosPiezas: any;
  @Output() ordenRetrocederResumen = new EventEmitter<boolean>()
  @Input() resumen : any
  paises: any = Paises;
  jPaises:any =this.paises.default;
  departamentos: any = Departamentos;
  jDepartamentos: any = this.departamentos.default;
  ciudades: any = Ciudades;
  jCiudades: any = this.ciudades.default;
  pais: any
  departamento: any
  ciudad: any
  

 

  ngOnInit(): void {
    this.obtenerNombre(this.resumen.pais, this.resumen.departamento, this.resumen.ciudad)
  }
  
  retrocederResumenAPiezas(){
    this.ordenRetrocederResumen.emit(this.retrocederResumen)

  }

  recibirformularioPiezas($event){
    this.datosPiezas = $event
  }

 guardar(){
  console.log('resumen', this.resumen)
 }

 obtenerNombre(idPais, idDepartamento, idCiudad){
  this.pais = this.jPaises.find(pais => pais.idPais == idPais)
  this.departamento = this.jDepartamentos.find(departamento => departamento.idDepartamento == idDepartamento)
  this.ciudad =this.jCiudades.find(ciudad => ciudad.idCiudad == idCiudad)

  console.log("obtenernombre", this.pais)
 }

}
