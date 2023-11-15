import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantBistrotsommelierPage } from './restaurant-bistrotsommelier.page';

describe('RestaurantBistrotsommelierPage', () => {
  let component: RestaurantBistrotsommelierPage;
  let fixture: ComponentFixture<RestaurantBistrotsommelierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantBistrotsommelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
