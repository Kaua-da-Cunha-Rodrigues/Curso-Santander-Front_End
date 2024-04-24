import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Um dos valores será passado. O padrão é HOME
  currentPage: 'HOME' | 'ABOUT' | 'CONTACT' | 'ADDRESS' = 'HOME';

  goToAbout(): void{
    this.currentPage = "ABOUT"
  }
}
