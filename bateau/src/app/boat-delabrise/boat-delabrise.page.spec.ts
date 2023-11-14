import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoatDelabrisePage } from './boat-delabrise.page';

describe('BoatDelabrisePage', () => {
  let component: BoatDelabrisePage;
  let fixture: ComponentFixture<BoatDelabrisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoatDelabrisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
