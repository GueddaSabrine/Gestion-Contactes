import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup,FormControlName, Validators } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  /**
   * Permet d'émettre un évènement lors
   * de la création d'une tâche.
   * @type {EventEmitter<any>}
   */
   @Output() newContactEvent = new EventEmitter();

    /**
   * La tâche à créer.
   * @type {Contact}
   */
  public contact: Contact = new Contact();

  registerForm!: FormGroup;
  submitted = false;

  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        pseudo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailRegex)]]
      }
    )};
  
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.registerForm.value)
        const {name, pseudo, email}= this.registerForm.value;
        this.contact.name=name;
        this.contact.pseudo=pseudo;
        this.contact.email=email;

         alert('SUCCESS!!'+ JSON.stringify(this.registerForm.value, null,2));

         this.newContactEvent.emit({ contact: this.contact });
        

    }

    // onReset() {
    //     this.submitted = false;
    //     this.registerForm.reset();
    // }

    addContact() {
      /**
       * Lorque l'utilisateur soumet le formulaire
       * j'émet l'évènement avec la nouvelle tâche.
       */
      // this.newContactEvent.emit({ contact: this.contact });
  
      /** Réinitialisation de la tâche @type {Contact} */
      // this.contact = new Contact();
    }


}
