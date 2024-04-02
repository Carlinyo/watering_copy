import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDescComponent } from './info-desc.component';

describe('InfoDescComponent', () => {
  let component: InfoDescComponent;
  let fixture: ComponentFixture<InfoDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
