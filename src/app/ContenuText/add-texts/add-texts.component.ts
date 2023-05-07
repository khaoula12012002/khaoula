import { Component } from '@angular/core';
import { Text } from 'src/app/models/text.model';
import { ContenuTextuelService } from 'src/app/servicesTs/contenu-textuel.service';

@Component({
  selector: 'app-add-texts',
  templateUrl: './add-texts.component.html',
  styleUrls: ['./add-texts.component.css']
})
export class AddTextsComponent {
  text: Text={
    title: '',
    description: '',
    published: false
  }
  submitted = false;
  constructor( private textservice: ContenuTextuelService){}

  saveTutorial(): void {
    const data = {
      title: this.text.title,
      description: this.text.description
    };

    this.textservice.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.text = {
      title: '',
      description: '',
      published: false
    };
  }

}
