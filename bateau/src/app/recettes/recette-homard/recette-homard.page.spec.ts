import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteHomardPage } from './recette-homard.page';

describe('RecetteHomardPage', () => {
  let component: RecetteHomardPage;
  let fixture: ComponentFixture<RecetteHomardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetteHomardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
