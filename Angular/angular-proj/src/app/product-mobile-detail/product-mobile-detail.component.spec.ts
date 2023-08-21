import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMobileDetailComponent } from './product-mobile-detail.component';

describe('ProductMobileDetailComponent', () => {
  let component: ProductMobileDetailComponent;
  let fixture: ComponentFixture<ProductMobileDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMobileDetailComponent]
    });
    fixture = TestBed.createComponent(ProductMobileDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
