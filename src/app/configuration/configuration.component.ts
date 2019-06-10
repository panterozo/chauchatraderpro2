import { Component, OnInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  	galleryOptions: NgxGalleryOptions[];
  	galleryImages: NgxGalleryImage[];
 
    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                width: '64%',
                height: '900px',
                thumbnailsColumns: 3,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/Configuraciones01.jpg',
                medium: 'assets/Configuraciones01.jpg',
                big: 'assets/Configuraciones01.jpg'
            },
            {
                small: 'assets/Configuraciones02.jpg',
                medium: 'assets/Configuraciones02.jpg',
                big: 'assets/Configuraciones02.jpg'
            },
            {
                small: 'assets/Configuraciones03.jpg',
                medium: 'assets/Configuraciones03.jpg',
                big: 'assets/Configuraciones03.jpg'
            }
        ];
    }


}
