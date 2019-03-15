import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkListPage } from './work-list.page';

describe('WorkListPage', () => {
  let component: WorkListPage;
  let fixture: ComponentFixture<WorkListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
