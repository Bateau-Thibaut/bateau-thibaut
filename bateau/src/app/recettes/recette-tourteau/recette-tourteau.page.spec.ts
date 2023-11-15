import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecetteTourteauPage } from './recette-tourteau.page';

describe('RecetteTourteauPage', () => {
  let component: RecetteTourteauPage;
  let fixture: ComponentFixture<RecetteTourteauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecetteTourteauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
