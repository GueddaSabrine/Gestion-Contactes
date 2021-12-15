import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact';

@Pipe({
  name: 'contact'
})
export class ContactPipe implements PipeTransform {

  transform(contact: Contact):any {
    return null;
  }

}
