import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSection2Component } from './right-section2.component';

describe('RightSection2Component', () => {
  let component: RightSection2Component;
  let fixture: ComponentFixture<RightSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSection2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
