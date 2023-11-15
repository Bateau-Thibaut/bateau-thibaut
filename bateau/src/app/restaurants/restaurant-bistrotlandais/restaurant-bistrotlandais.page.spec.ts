import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantBistrotlandaisPage } from './restaurant-bistrotlandais.page';

describe('RestaurantBistrotlandaisPage', () => {
  let component: RestaurantBistrotlandaisPage;
  let fixture: ComponentFixture<RestaurantBistrotlandaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantBistrotlandaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
