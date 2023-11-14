import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoatAquilonPage } from './boat-aquilon.page';

describe('BoatAquilonPage', () => {
  let component: BoatAquilonPage;
  let fixture: ComponentFixture<BoatAquilonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoatAquilonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
