import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MovingBarComponent } from './moving-bar.component';

describe('MovingBarComponent', () => {
  let component: MovingBarComponent;
  let fixture: ComponentFixture<MovingBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MovingBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MovingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
