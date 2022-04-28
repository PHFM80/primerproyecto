import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtroscursosComponent } from './otroscursos.component';

describe('OtroscursosComponent', () => {
  let component: OtroscursosComponent;
  let fixture: ComponentFixture<OtroscursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtroscursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtroscursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
