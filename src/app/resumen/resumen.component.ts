import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {
  retrocederResumen: boolean = true;
  @Output() ordenRetrocederResumen = new EventEmitter<boolean>()

 

  ngOnInit() {
  }
  
  retrocederResumenAPiezas(){
    this.ordenRetrocederResumen.emit(this.retrocederResumen)

  }
}
