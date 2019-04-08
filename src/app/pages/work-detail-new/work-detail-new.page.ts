import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-detail-new',
  templateUrl: './work-detail-new.page.html',
  styleUrls: ['./work-detail-new.page.scss'],
})
export class WorkDetailNewPage implements OnInit {

  form: FormGroup;
  formGroup: FormGroup;

/*
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public imageUrl: string,
        public notes: string,
        public imageList: string[],
    ) {
*/
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(180)]
      }),
      workDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }


  onCreateWorkDetail() {
    if (!this.form.valid) {
      return;
    }

    console.log(this.form);
  }

}
