import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() {
  }

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: "/"
      },
      {
        label: "All Cars",
        icon: "pi pi-car",
        routerLink: "/vehicles"
      },
      {
        label: "Green Cars",
        icon: "pi pi-car",
        routerLink: "/green-cars"
      },
      {
        label: "Offer Cars",
        icon: "pi pi-car",
        routerLink: "/offer-cars"
      },
      {
        label: "FAQ",
        icon: "pi pi-question",
        routerLink: "/faq"
      },
      {
        label: "Support",
        icon: "pi \n" +
          "pi-question-circle"
      }
    ];

  }
}
