import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { sectionFeatures } from '../models/section-features.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() homeData!: sectionFeatures

  @Output() messageHomeEmitter: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
    //Esse emit, servirá para mostrar em app.component, quando o componente home for inicializado, imprimindo no log
    this.messageHomeEmitter.emit("Componente home foi iniciado")
  }
}
