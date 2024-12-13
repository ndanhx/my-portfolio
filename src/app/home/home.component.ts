import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {AboutComponent} from "../about/about.component";
import {MovingBarComponent} from "../moving-bar/moving-bar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    IonicModule,
    RouterLink,
    AboutComponent,
    MovingBarComponent
  ],
  standalone: true
})
export class HomeComponent{
  // Accéder à l'élément avec l'ID section-cible
  @ViewChild('sectionCible', { static: false }) sectionCible!: ElementRef;

  // Méthode pour scroller vers l'élément
  scrollToSection() {
    this.sectionCible.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


}
