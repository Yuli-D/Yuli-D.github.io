import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPositiveGraphicComponent } from './screen-positive-graphic.component';

describe('ScreenPositiveGraphicComponent', () => {
  let component: ScreenPositiveGraphicComponent;
  let fixture: ComponentFixture<ScreenPositiveGraphicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenPositiveGraphicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPositiveGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
