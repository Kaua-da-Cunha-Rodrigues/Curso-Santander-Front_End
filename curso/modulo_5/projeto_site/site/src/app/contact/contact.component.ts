import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SectionContact } from '../models/section-features.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  //O Input recebe os dados do pai
  @Input() contactData!: SectionContact

  //O ouput envia dados do filho pro pai
  //o EventEmitter emite um evento que envia um dado do tipo SectionContact
  @Output() saveDataEmitter: EventEmitter<SectionContact> = new EventEmitter()

  @Output() messageContactEmitter: EventEmitter<string> = new EventEmitter()


  ngOnInit(): void {
    //puxa as informações do conteúdo dinâmico da página pra ca
    this.contactData.email = this.contactData?.email
    this.contactData.message = this.contactData?.message

    //Esse emit, servirá para mostrar em app.component, quando o componente contact for inicializado, imprimindo no log
    this.messageContactEmitter.emit("Componente contact foi iniciado")
  }

  saveData(): void{
    //Emite o dado contactData que é do tipo SectionData para o app.component
    
    this.saveDataEmitter.emit(this.contactData)
  }
}
