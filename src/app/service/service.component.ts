import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class ServiceComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
