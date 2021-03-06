import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryoutsComponent } from './tryouts.component';

describe('TryoutsComponent', () => {
  let component: TryoutsComponent;
  let fixture: ComponentFixture<TryoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
