import { Component } from '@angular/core';

@Component({
  selector: 'app-front-mentor',
  standalone: true,
  imports: [],
  templateUrl: './front-mentor.component.html',
  styleUrl: './front-mentor.component.css'
})
export class FrontMentorComponent {

  Frontend: string = "Frontend Mentor"
  FeedbackBoard: string = "Feedback Board"

cardOne: any[] = [


{
  all:"All",
  ui: "UI",
  ux: "UX",
  enhance: "Enhancement",
  bug: "Bug",
  feature: "Feature",

},


]


    Roadmap: string = "Roadmap"
    Planned: string =  "Planned"
    InProgress: string = "In-Progress"
    live: string = "Live"
    view: string = "view"
    feature: string = "Feature"

    two: number = 2
    three: number =  3
    one: number =  1





}
