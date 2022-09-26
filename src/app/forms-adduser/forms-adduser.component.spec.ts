import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAdduserComponent } from './forms-adduser.component';

describe('FormsAdduserComponent', () => {
  let component: FormsAdduserComponent;
  let fixture: ComponentFixture<FormsAdduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAdduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsAdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
