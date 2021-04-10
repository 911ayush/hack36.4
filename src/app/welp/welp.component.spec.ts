import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelpComponent } from './welp.component';

describe('WelpComponent', () => {
  let component: WelpComponent;
  let fixture: ComponentFixture<WelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
