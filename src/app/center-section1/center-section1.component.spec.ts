import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSection1Component } from './center-section1.component';

describe('CenterSection1Component', () => {
  let component: CenterSection1Component;
  let fixture: ComponentFixture<CenterSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterSection1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
