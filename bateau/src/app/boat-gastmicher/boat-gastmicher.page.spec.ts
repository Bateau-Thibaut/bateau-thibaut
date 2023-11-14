import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoatGastmicherPage } from './boat-gastmicher.page';

describe('BoatGastmicherPage', () => {
  let component: BoatGastmicherPage;
  let fixture: ComponentFixture<BoatGastmicherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoatGastmicherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
