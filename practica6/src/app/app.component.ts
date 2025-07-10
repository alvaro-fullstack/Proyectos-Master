import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ RouterOutlet, RouterLink, RouterModule]
})
export class AppComponent {
  event = 'rutas';

  getSelect(event: any) {
    console.log(event.target.value)
  }
}