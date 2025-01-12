import { Component } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    NgClass,
    IonicModule,
    NgOptimizedImage,
    RouterLinkActive,
    RouterLink,
  ],
  standalone: true,
})
export class HeaderComponent {
  constructor() {}

  //Sidebar toggle show hide function
  status = false;
  addToggle() {
    this.status = !this.status;
  }
}
