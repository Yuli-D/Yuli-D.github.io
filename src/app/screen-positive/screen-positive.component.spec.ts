import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPositiveComponent } from './screen-positive.component';

describe('ScreenPositiveComponent', () => {
  let component: ScreenPositiveComponent;
  let fixture: ComponentFixture<ScreenPositiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPositiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPositiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
