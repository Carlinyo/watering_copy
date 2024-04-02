import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesItemsComponent } from './prices-items.component';

describe('PricesItemsComponent', () => {
  let component: PricesItemsComponent;
  let fixture: ComponentFixture<PricesItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
