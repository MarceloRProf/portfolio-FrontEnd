import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeduacionComponent } from './editeduacion.component';

describe('EditeduacionComponent', () => {
  let component: EditeduacionComponent;
  let fixture: ComponentFixture<EditeduacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeduacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeduacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
