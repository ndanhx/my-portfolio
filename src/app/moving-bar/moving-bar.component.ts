import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-moving-bar',
  templateUrl: './moving-bar.component.html',
  styleUrls: ['./moving-bar.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage
  ]
})
export class MovingBarComponent {

  constructor() { }

}
