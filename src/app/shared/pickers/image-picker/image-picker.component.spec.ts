import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePickerPage } from './image-picker.page';

describe('ImagePickerPage', () => {
  let component: ImagePickerPage;
  let fixture: ComponentFixture<ImagePickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePickerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
