import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coin360Component } from './coin360.component';

describe('Coin360Component', () => {
  let component: Coin360Component;
  let fixture: ComponentFixture<Coin360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coin360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coin360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
