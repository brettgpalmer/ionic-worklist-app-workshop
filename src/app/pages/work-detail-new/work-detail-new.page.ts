import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WorkService } from 'src/app/services/work.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  const sliceSize = 1024;
  const byteCharacters = window.atob(base64Data);
  const bytesLength = byteCharacters.length;
  const slicesCount = Math.ceil(bytesLength / sliceSize);
  const byteArrays = new Array(slicesCount);

  for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    const begin = sliceIndex * sliceSize;
    const end = Math.min(begin + sliceSize, bytesLength);

    const bytes = new Array(end - begin);
    for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}


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
  constructor(
    private workService: WorkService,
    private router: Router,
    private loadingCtrl: LoadingController
   ) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(180)]
      }),
      workDate: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      image: new FormControl(null)
    });
  }


  onCreateWorkDetail() {
    //if (!this.form.valid || !this.form.get('image').value) {
    if (!this.form.valid ) {
      return;
    }

    this.router.navigate(['/work-list']);

    /* this.loadingCtrl
    .create({
      message: 'Creating work service..'
    })
    .then(  loadingEl => {
     loadingEl.present();
     this.workService.addWork(
       this.form.value.title,
       this.form.value.description,
       new Date(this.form.value.workDate),
       this.form.value.image
     );
    })
  ).subscribe(() => { {
    this.loadingCtrl.dismiss();
    this.form.reset();
    this.router.navigate(['/work-list'])
  } */

    console.log(this.form);
  }


  onImagePicked(imageData: string | File) {
    let imageFile;
    if (typeof imageData === 'string') {
      try {
        imageFile = base64toBlob(
          imageData.replace('data:image/jpeg;base64,', ''),
          'image/jpeg'
        );
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      imageFile = imageData;
    }
    this.form.patchValue({ image: imageFile });
  }
}
