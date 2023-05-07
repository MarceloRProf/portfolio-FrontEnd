import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAcercaDeComponent } from './new-acerca-de.component';

describe('NewAcercaDeComponent', () => {
  let component: NewAcercaDeComponent;
  let fixture: ComponentFixture<NewAcercaDeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAcercaDeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAcercaDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
