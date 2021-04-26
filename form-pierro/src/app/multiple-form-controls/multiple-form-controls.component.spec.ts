import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFormControlsComponent } from './multiple-form-controls.component';

describe('MultipleFormControlsComponent', () => {
  let component: MultipleFormControlsComponent;
  let fixture: ComponentFixture<MultipleFormControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleFormControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
