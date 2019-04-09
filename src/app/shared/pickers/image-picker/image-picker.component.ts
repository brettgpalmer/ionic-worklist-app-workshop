import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {

  @Output() imagePick = new EventEmitter<string>();
  @Input() showPreview = false;
  selectedImage: String;

  constructor() { }

  ngOnInit() {}

  /* 
    method to selectd an image but also provide method if camera is not available
  */
  onPickImage() {

    if (!Capacitor.isPluginAvailable('Camera')) {
      return;
    }
    Plugins.Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      width: 300,
      resultType: CameraResultType.Base64
    }).then( image => {
     this.selectedImage = image.base64Data;
     this.imagePick.emit(image.base64Data) ;

    }).catch(error => {
      console.log(error);
      return false;
    });
  }
}
