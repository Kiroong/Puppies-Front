import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppySummaryComponent } from './puppy-summary.component';

describe('PuppySummaryComponent', () => {
  let component: PuppySummaryComponent;
  let fixture: ComponentFixture<PuppySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
