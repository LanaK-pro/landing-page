import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WitnessComponent } from './witness.component';

describe('WitnessComponent', () => {
  let component: WitnessComponent;
  let fixture: ComponentFixture<WitnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WitnessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
