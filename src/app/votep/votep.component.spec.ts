import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotepComponent } from './votep.component';

describe('VotepComponent', () => {
  let component: VotepComponent;
  let fixture: ComponentFixture<VotepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
