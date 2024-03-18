import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

 cardTopic =[ 
  {
  title: 'Planned',
  description: 'Ideas prioritized for research',
  no: 2
 },
 {
  title: 'In-Progress',
  description: 'Currently beign developrd',
  no: 3
  
 },
 {
  title: 'Live',
  description: 'Released features',
  no: 1
 }

]

feedback = {
  title: 'More comprehensive reports',
  category: 'Planned',
  detail: 'It would be great to see a more detailed breakdown of solutions.',
}

  // count = signal(0);
  
  // Increase(){
  //   this.count.update(value => value + 1);
  //   console.log(this.count());
  // }

  // Decrease(){
  //   this.count.update(value => value - 1);
  //   console.log(this.count());
  // }


}
