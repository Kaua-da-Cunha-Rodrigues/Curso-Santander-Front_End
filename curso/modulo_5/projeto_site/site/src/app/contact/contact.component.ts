import { Component, Input } from '@angular/core';
import { SectionContact } from '../models/section-features.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contactData!: SectionContact
}
