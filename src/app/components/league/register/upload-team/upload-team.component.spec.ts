import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadPlayerComponent } from './upload-team.component';

describe('UploadPlayerComponent', () => {
  let component: UploadPlayerComponent;
  let fixture: ComponentFixture<UploadPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UploadPlayerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
