import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  constructor(private route:Router ){}
  compte(){
    this.route.navigate(['/signup']);
  }

}
