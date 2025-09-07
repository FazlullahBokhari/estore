import { Component } from '@angular/core';
import { CatnavigationComponent } from './catnavigation/catnavigation.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-home',
  imports: [CatnavigationComponent,HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
