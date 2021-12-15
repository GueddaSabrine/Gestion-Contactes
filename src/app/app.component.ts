import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'gestionContact';
  public contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    /**
     * Au chargement de l'application,
     * je récupère mes tâches dans le localStorage.
     * @type {Contact[]}
     */
    this.contacts = this.contactService.contacts;
  }

  /**
   * Cette fonction se déclenche dans
   * l'application lorsqu'une nouvelle
   * tâche est créée par l'utilisateur
   * dans le composant app-form.
   * @param newContact
   */
   newContact(event: any) {
     console.log(event.contact)
     this.contacts.push(event.contact);
    this.contactService.contacts = this.contacts;
  }

  /**
   * L'utilisateur viens de terminer une tâche.
   * @param {Contact} contact
   */
  isDone(t: Contact) {
    // t.status = true;
    this.contactService.contacts = this.contacts
  }

}
