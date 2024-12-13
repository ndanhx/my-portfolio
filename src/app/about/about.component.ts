import { Component } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ]
})
export class AboutComponent {

  selectedTab: string = 'skills';

  public selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
