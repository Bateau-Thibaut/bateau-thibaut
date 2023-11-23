import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoductListPage } from './poduct-list.page';

describe('PoductListPage', () => {
  let component: PoductListPage;
  let fixture: ComponentFixture<PoductListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
