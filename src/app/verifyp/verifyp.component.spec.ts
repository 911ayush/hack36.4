import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifypComponent } from './verifyp.component';

describe('VerifypComponent', () => {
  let component: VerifypComponent;
  let fixture: ComponentFixture<VerifypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
