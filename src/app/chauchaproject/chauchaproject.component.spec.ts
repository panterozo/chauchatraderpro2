import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauchaprojectComponent } from './chauchaproject.component';

describe('ChauchaprojectComponent', () => {
  let component: ChauchaprojectComponent;
  let fixture: ComponentFixture<ChauchaprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChauchaprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauchaprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
