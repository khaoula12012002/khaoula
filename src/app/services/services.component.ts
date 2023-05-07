import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
constructor(private route:Router ){}
  ptv(){
    this.route.navigate(['/ptv']);
  }
  pradio(){
    this.route.navigate(['/pradio']);
  }
  pub(){
    this.route.navigate(['/pub']);
  }

}
