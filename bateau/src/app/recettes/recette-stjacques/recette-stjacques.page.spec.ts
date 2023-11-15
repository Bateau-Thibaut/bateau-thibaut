import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteStjacquesPage } from './recette-stjacques.page';

describe('RecetteStjacquesPage', () => {
  let component: RecetteStjacquesPage;
  let fixture: ComponentFixture<RecetteStjacquesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetteStjacquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
