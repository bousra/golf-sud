import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanDiagnosticComponent } from './bilan-diagnostic.component';

describe('BilanDiagnosticComponent', () => {
  let component: BilanDiagnosticComponent;
  let fixture: ComponentFixture<BilanDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilanDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
