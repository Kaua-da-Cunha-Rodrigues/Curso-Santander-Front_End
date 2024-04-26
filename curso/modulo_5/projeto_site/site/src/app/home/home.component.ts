import { Component, Input } from '@angular/core';
import { SectionModel } from '../models/section-features.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() homeData!: SectionModel
}
