import { Component } from '@angular/core';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  template: `<app-blog></app-blog>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'trabajo5';
}
