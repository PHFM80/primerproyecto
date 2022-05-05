import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApreciacionesComponent } from './apreciaciones.component';

describe('ApreciacionesComponent', () => {
  let component: ApreciacionesComponent;
  let fixture: ComponentFixture<ApreciacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApreciacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApreciacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
