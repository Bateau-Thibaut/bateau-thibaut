import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteBarPage } from './recette-bar.page';

describe('RecetteBarPage', () => {
  let component: RecetteBarPage;
  let fixture: ComponentFixture<RecetteBarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetteBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
