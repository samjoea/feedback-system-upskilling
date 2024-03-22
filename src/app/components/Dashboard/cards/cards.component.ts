import { Component } from '@angular/core';

interface CardDetails{
      id: number,
      click: number,
      head: string,
      paragraph: string,
      btnNumber: string
      comment: number
}


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})



export class CardsComponent {


    CardDetails: any[]  = [

    {
      id: 1,
      click: 112,
      head: "Add tags for solutions",
      paragraph: "Easier to search for solutions based on a specific stack.",
      btnNumber: "Enhancement",
      comment: 2

    },
    {
      id: 2,
      click: 99,
      head: "Add a dark theme option",
      paragraph: "It would help people with light sensitivities and who prefer dark mode.",
      btnNumber: "Feature",
      comment: 4

    },
    {
      id: 3,
      click: 65,
      head: "Q&A within the challenge hubs",
      paragraph: "Challenge-specific Q&A would make for easy reference",
      btnNumber: "Feature",
      comment: 1

    },
    {
      id: 4,
      click: 51,
      head: "Allow image/video upload to feedback",
      paragraph: "Images and screencasts can enhance comments on solutions.",
      btnNumber: "Enhancement",
      comment: 2

    },
    {
      id: 5,
      click: 42,
      head: "Ability to follow others",
      paragraph: "Stay updated on comments and solutions other people post.",
      btnNumber: "Feature",
      comment: 3

    },
    {
      id: 6,
      click: 3,
      head: "Preview images not loading",
      paragraph: "Challenge preview images are missing when you apply a filter.",
      btnNumber: "Bug",
      comment: 0

    },


  ]


Increase($event: MouseEvent) {
console.log("Increased");
}


}
