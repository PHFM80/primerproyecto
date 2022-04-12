import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotopabloComponent } from './fotopablo.component';

describe('FotopabloComponent', () => {
  let component: FotopabloComponent;
  let fixture: ComponentFixture<FotopabloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotopabloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotopabloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
