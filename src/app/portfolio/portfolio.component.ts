import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class PortfolioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
