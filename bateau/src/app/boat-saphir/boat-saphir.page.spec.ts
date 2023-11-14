import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoatSaphirPage } from './boat-saphir.page';

describe('BoatSaphirPage', () => {
  let component: BoatSaphirPage;
  let fixture: ComponentFixture<BoatSaphirPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoatSaphirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
