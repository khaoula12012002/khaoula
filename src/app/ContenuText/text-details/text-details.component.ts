import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Text } from 'src/app/models/text.model';
import { ContenuTextuelService } from 'src/app/servicesTs/contenu-textuel.service';

@Component({
  selector: 'app-text-details',
  templateUrl: './text-details.component.html',
  styleUrls: ['./text-details.component.css']
})
export class TextDetailsComponent implements OnInit{
  @Input() viewMode = false;

  @Input() currentText: Text = {
    title: '',
    description: '',
    published: false
  };
  
  message = '';

  constructor(
    private textservice: ContenuTextuelService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getText(this.route.snapshot.params["id"]);
    }
  }

  getText(id: string): void {
    this.textservice.get(id)
      .subscribe({
        next: (data) => {
          this.currentText = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentText.title,
      description: this.currentText.description,
      published: status
    };

    this.message = '';

    this.textservice.update(this.currentText.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentText.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.textservice.update(this.currentText.id, this.currentText)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.textservice.delete(this.currentText.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/tutorials']);
        },
        error: (e) => console.error(e)
      });
  }

}
