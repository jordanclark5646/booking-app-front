import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberProfileComponent } from './barber-profile.component';

describe('BarberProfileComponent', () => {
  let component: BarberProfileComponent;
  let fixture: ComponentFixture<BarberProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
