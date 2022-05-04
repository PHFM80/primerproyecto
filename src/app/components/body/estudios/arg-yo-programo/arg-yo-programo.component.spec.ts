import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgYoProgramoComponent } from './arg-yo-programo.component';

describe('ArgYoProgramoComponent', () => {
  let component: ArgYoProgramoComponent;
  let fixture: ComponentFixture<ArgYoProgramoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgYoProgramoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArgYoProgramoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
