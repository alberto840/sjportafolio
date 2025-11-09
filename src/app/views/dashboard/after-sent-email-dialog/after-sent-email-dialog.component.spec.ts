import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSentEmailDialogComponent } from './after-sent-email-dialog.component';

describe('AfterSentEmailDialogComponent', () => {
  let component: AfterSentEmailDialogComponent;
  let fixture: ComponentFixture<AfterSentEmailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AfterSentEmailDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSentEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
