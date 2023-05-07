import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name!: string;
  email!: string;
  subject!:string;
  message!: string;


  constructor(private http: HttpClient) {
    this.name= '';
      this.email= '';
     this.subject= '';
     this.message= '';
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('email', this.email);
    formData.append('message', this.message);

    this.http.post('http://localhost:8080/api/contact', formData).subscribe(
      () => {
        alert('Votre message a été envoyé avec succès !');
        this.name = '';
        this.email = '';
        this.subject= '';
        this.message = '';
      },
      (error) => {
        alert('Une erreur est survenue lors de l\'envoi du message.');
        console.error(error);
      }
    );
  }
  }

