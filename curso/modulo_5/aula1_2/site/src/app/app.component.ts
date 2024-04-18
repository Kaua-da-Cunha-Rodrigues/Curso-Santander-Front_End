import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Uma das opções abaixo deve ser selecionada
  currentPage: 'HOME' | 'ABOUT' | 'CONTACT' | 'ADDRESS' = 'HOME'

  //usado no app.component.html para quando clicar no botão, mudar para o componente about
  goToAbout(): void {
    this.currentPage = 'ABOUT'
  }
}
