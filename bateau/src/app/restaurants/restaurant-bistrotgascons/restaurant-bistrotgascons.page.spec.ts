import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantBistrotgasconsPage } from './restaurant-bistrotgascons.page';

describe('RestaurantBistrotgasconsPage', () => {
  let component: RestaurantBistrotgasconsPage;
  let fixture: ComponentFixture<RestaurantBistrotgasconsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantBistrotgasconsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
