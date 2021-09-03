import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EHRloginDialogComponent } from './ehrlogin-dialog.component';

describe('EHRloginDialog', () => {
  let component: EHRloginDialogComponent;
  let fixture: ComponentFixture<EHRloginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EHRloginDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EHRloginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
