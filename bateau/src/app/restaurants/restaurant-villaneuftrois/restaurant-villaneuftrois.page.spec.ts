import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurantVillaneuftroisPage } from './restaurant-villaneuftrois.page';

describe('RestaurantVillaneuftroisPage', () => {
  let component: RestaurantVillaneuftroisPage;
  let fixture: ComponentFixture<RestaurantVillaneuftroisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurantVillaneuftroisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
