import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCoachComponent } from './upload-coach.component';

describe('UploadCoachComponent', () => {
  let component: UploadCoachComponent;
  let fixture: ComponentFixture<UploadCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
