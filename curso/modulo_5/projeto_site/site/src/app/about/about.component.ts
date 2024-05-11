import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionData } from '../models/section-features.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  @Input() aboutData!: SectionData

  @Output() messageAboutEmitter: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {
    //Esse emit, servirá para mostrar em app.component, quando o componente about for inicializado, imprimindo no log
    this.messageAboutEmitter.emit("Componente about foi iniciado")
  }
}
