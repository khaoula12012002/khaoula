import { Component, OnInit } from '@angular/core';
import { Text } from 'src/app/models/text.model';
import { ContenuTextuelService } from 'src/app/servicesTs/contenu-textuel.service';

@Component({
  selector: 'app-texts-list',
  templateUrl: './texts-list.component.html',
  styleUrls: ['./texts-list.component.css']
})
export class TextsListComponent implements OnInit{
  tutorials?: Text[];
  currentTutorial: Text = {};
  currentIndex = -1;
  title = '';

  constructor(private textservice: ContenuTextuelService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.textservice.getAll()
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(text: Text, index: number): void {
    this.currentTutorial = text;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.textservice.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchTitle(): void {
    this.currentTutorial = {};
    this.currentIndex = -1;

    this.textservice.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
