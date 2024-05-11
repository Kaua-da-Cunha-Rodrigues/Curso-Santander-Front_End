import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionData } from '../models/section-features.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  @Input() addressData!: SectionData

  @Output() messageAddressEmitter: EventEmitter<string> = new EventEmitter()

  ngOnInit(): void {

    //Esse emit, servirá para mostrar em app.component, quando o componente address for inicializado, imprimindo no log
    this.messageAddressEmitter.emit("Componente address foi iniciado")
  }
}
