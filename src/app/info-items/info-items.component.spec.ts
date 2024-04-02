import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoItemsComponent } from './info-items.component';

describe('InfoItemsComponent', () => {
  let component: InfoItemsComponent;
  let fixture: ComponentFixture<InfoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
