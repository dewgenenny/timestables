import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegeneratorComponent } from './tablegenerator.component';

describe('TablegeneratorComponent', () => {
  let component: TablegeneratorComponent;
  let fixture: ComponentFixture<TablegeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablegeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablegeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
