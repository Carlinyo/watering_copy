import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingTitlesComponent } from './pricing-titles.component';

describe('PricingTitlesComponent', () => {
  let component: PricingTitlesComponent;
  let fixture: ComponentFixture<PricingTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingTitlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricingTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
