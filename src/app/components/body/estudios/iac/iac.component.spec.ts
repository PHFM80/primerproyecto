import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IacComponent } from './iac.component';

describe('IacComponent', () => {
  let component: IacComponent;
  let fixture: ComponentFixture<IacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
