import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iac2Component } from './iac2.component';

describe('Iac2Component', () => {
  let component: Iac2Component;
  let fixture: ComponentFixture<Iac2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iac2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iac2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
