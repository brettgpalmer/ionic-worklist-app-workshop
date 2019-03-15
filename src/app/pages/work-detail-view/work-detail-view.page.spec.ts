import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailViewPage } from './work-detail-view.page';

describe('WorkDetailViewPage', () => {
  let component: WorkDetailViewPage;
  let fixture: ComponentFixture<WorkDetailViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDetailViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
