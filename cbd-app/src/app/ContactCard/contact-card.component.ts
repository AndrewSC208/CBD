import {Component, Input} from '@angular/core';
import {Contact} from './models/contact.interface';

@Component({
	selector: 'contact-card',
	template: `
		<div class="contact-card">
			<p>{{contact.name}} ( {{contact.age}} )</p>
			<p>{{contact.email}}</p>
		</div>
	`
})
export class ContactCardComponent {

	@Input()
	contact: Contact;
}