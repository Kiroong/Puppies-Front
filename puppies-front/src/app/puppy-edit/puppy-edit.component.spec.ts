import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyEditComponent } from './puppy-edit.component';

describe('PuppyEditComponent', () => {
  let component: PuppyEditComponent;
  let fixture: ComponentFixture<PuppyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
