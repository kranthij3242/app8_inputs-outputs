import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinputsandoutputsComponent } from './basicinputsandoutputs.component';

describe('BasicinputsandoutputsComponent', () => {
  let component: BasicinputsandoutputsComponent;
  let fixture: ComponentFixture<BasicinputsandoutputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicinputsandoutputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicinputsandoutputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
