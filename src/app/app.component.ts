import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './components/Dashboard/dashboard.component';
import { FrontMentorComponent } from './components/SideBar/front-mentor/front-mentor.component';
import { CardsComponent } from './components/Dashboard/cards/cards.component';
import { NavbarComponent } from './components/Dashboard/navbar/navbar.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DashboardComponent, FrontMentorComponent, CardsComponent, NavbarComponent]
})
export class AppComponent {
  title = 'feedback-system-upskilling';
}
