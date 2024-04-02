import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPartComponent } from './map-part.component';

describe('MapPartComponent', () => {
  let component: MapPartComponent;
  let fixture: ComponentFixture<MapPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapPartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
