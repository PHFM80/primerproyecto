import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoportadaComponent } from './fotoportada.component';

describe('FotoportadaComponent', () => {
  let component: FotoportadaComponent;
  let fixture: ComponentFixture<FotoportadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoportadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoportadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
