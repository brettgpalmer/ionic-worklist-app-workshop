import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDetailNewPage } from './work-detail-new.page';

describe('WorkDetailNewPage', () => {
  let component: WorkDetailNewPage;
  let fixture: ComponentFixture<WorkDetailNewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDetailNewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDetailNewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
