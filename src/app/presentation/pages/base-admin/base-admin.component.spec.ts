import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAdminComponent } from './base-admin.component';

describe('BaseAdminComponent', () => {
  let component: BaseAdminComponent;
  let fixture: ComponentFixture<BaseAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
