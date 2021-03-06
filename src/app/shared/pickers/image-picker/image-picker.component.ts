import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Plugins, Capacitor, CameraSource, CameraResultType } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {

  @ViewChild('filePicker') filePicker: ElementRef<HTMLInputElement>;
  @Output() imagePick = new EventEmitter<string | File>();
  @Input() showPreview = false;
  selectedImage: String;
  usePicker = false;

  constructor(private platform: Platform) { }

  // Check the platform types for debugging
  ngOnInit() {
    console.log('Mobile', this.platform.is('mobile'));
    console.log('Capacitor', this.platform.is('capacitor'));
    console.log('Hybrid', this.platform.is('hybrid'));
    console.log('iOS', this.platform.is('ios'));
    console.log('Android', this.platform.is('android'));
    console.log('Desktop', this.platform.is('desktop'));
    console.log('Electron', this.platform.is('electron'));

    if (
      (this.platform.is('mobile') && !this.platform.is('hybrid')) ||
        this.platform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }

  /*
    method to selectd an image but also provide method if camera is not available
  */
  onPickImage() {

    // Use when PWA not installed if (!Capacitor.isPluginAvailable('Camera') || this.usePicker ) {
    if (!Capacitor.isPluginAvailable('Camera') ) {
      this.filePicker.nativeElement.click();
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
      if (this.usePicker) {
        this.filePicker.nativeElement.click();
      }
      return false;
    });
  }

  onFileChosen(event: Event) {
    // console.log('here is the event: ' + event);
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) {
      return;
    }

    const fr = new FileReader();
    // Async task so need to anonymous function to get results once file 
    // is done reading the file URL
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl;
      this.imagePick.emit(pickedFile);
    };
    fr.readAsDataURL(pickedFile);
  }
}
