import {Component, OnInit} from '@angular/core';
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  events: any[] = [];

  ngOnInit() {
    this.events = [
      {
        status: 'Go to your email and get your ID and put it into the white space in support page and then click SHOW button',
        icon: PrimeIcons.ENVELOPE,
        color: '#f4f3f5'
      },
      {
        status: 'If your ID is correct then you can see all your booking details.',
        icon: PrimeIcons.INFO_CIRCLE,
        color: '#f4f3f5'
      },
      {status: 'You can reschedule your booking', icon: PrimeIcons.PENCIL, color: '#f4f3f5'},
      {status: 'You can cancel your booking', icon: PrimeIcons.BACKWARD, color: '#f4f3f5'}
    ];
  }

}
