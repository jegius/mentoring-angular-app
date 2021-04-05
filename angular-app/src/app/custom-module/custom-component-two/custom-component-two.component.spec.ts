import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomComponentTwoComponent } from './custom-component-two.component';

describe('CustomComponentTwoComponent', () => {
  let component: CustomComponentTwoComponent;
  let fixture: ComponentFixture<CustomComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomComponentTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
