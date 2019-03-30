import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenNegativeComponent } from './screen-negative.component';

describe('ScreenNegativeComponent', () => {
  let component: ScreenNegativeComponent;
  let fixture: ComponentFixture<ScreenNegativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenNegativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenNegativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
