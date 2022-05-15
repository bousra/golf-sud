import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrientationsPerspectivesComponent } from './orientations-perspectives.component';

describe('OrientationsPerspectivesComponent', () => {
  let component: OrientationsPerspectivesComponent;
  let fixture: ComponentFixture<OrientationsPerspectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrientationsPerspectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrientationsPerspectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
