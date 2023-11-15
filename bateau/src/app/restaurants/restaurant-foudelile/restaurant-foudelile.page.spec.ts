import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantFoudelilePage } from './restaurant-foudelile.page';

describe('RestaurantFoudelilePage', () => {
  let component: RestaurantFoudelilePage;
  let fixture: ComponentFixture<RestaurantFoudelilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantFoudelilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
