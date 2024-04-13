import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Uma das opções abaixo deve ser selecionada
  currentPage: 'HOME' | 'ABOUT' | 'CONTACT' | 'ADDRESS' = 'HOME'

  goToAbout(): void {
    this.currentPage = 'ABOUT'
  }
}
