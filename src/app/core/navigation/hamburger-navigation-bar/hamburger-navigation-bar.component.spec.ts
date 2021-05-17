import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HamburgerNavigationBarComponent} from './hamburger-navigation-bar.component';

describe('HamburgerNavigationBarComponent', () => {
  let component: HamburgerNavigationBarComponent;
  let fixture: ComponentFixture<HamburgerNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HamburgerNavigationBarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
