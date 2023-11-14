import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitspromsPage } from './produitsproms.page';

describe('ProduitspromsPage', () => {
  let component: ProduitspromsPage;
  let fixture: ComponentFixture<ProduitspromsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProduitspromsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
