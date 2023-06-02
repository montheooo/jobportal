import { Component, Input} from '@angular/core';
import { Contact } from 'src/app/Models/Contact';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input()
  footer!: Contact;
}
