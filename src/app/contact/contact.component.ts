import {Component} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {ContactService} from "../../services/contact.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  standalone: true
})
export class ContactComponent {

  contactForm = new FormGroup({
    nom: new FormControl('',[Validators.required]),
    mail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),  // Validation d'email
    sujet: new FormControl('',[Validators.required]),
    message: new FormControl('',[Validators.required])
  });

  emailSent: boolean = false;
  emailEchec: boolean = false;

  constructor(private contactService: ContactService) {}

  get primEmail(){
    return this.contactForm.get('mail');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Formulaire valide, envoyer les données au serveur
      this.contactService.envoyerEmail(this.contactForm.value).subscribe(
        (response) => {
          console.log('Email envoyé avec succès', response);
          this.emailEchec = false;
          this.emailSent = true;
          this.contactForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de l\'email', error);
          this.emailSent = false;
          this.emailEchec = true;
        }
      );
    } else {
      console.log('Formulaire invalide');
    }
  }

}

