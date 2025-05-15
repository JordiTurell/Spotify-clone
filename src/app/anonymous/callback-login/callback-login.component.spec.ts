import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackLoginComponent } from './callback-login.component';

describe('CallbackLoginComponent', () => {
  let component: CallbackLoginComponent;
  let fixture: ComponentFixture<CallbackLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallbackLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallbackLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
