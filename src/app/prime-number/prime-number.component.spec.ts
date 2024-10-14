import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNumberComponent } from './prime-number.component';

describe('PrimeNumberComponent', () => {
  let component: PrimeNumberComponent;
  let fixture: ComponentFixture<PrimeNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeNumberComponent]
    });
    fixture = TestBed.createComponent(PrimeNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
