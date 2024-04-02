import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatiliMasComponent } from './katili-mas.component';

describe('KatiliMasComponent', () => {
  let component: KatiliMasComponent;
  let fixture: ComponentFixture<KatiliMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KatiliMasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KatiliMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
