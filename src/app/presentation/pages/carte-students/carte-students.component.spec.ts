import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteStudentsComponent } from './carte-students.component';

describe('CarteStudentsComponent', () => {
  let component: CarteStudentsComponent;
  let fixture: ComponentFixture<CarteStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteStudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
