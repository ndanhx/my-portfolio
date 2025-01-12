import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonicModule],
  standalone: true,
})
export class FooterComponent implements OnInit {
  currentYear: any;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {}
}
