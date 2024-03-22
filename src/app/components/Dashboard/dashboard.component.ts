import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './cards/cards.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
