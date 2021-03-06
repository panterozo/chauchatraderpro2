import { Component, OnInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-coin360',
  templateUrl: './coin360.component.html',
  styleUrls: ['./coin360.component.css']
})
export class Coin360Component implements OnInit {

    galleryOptions: NgxGalleryOptions[];
  	galleryImages: NgxGalleryImage[];
 
    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                width: '64%',
                height: '900px',
                thumbnailsColumns: 3,
                imageAnimation: NgxGalleryAnimation.Slide
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/Coin360-01.png',
                medium: 'assets/Coin360-01.png',
                big: 'assets/Coin360-01.png'
            },
            {
                small: 'assets/Coin360-02.png',
                medium: 'assets/Coin360-02.png',
                big: 'assets/Coin360-02.png'
            },
            {
                small: 'assets/Coin360-03.png',
                medium: 'assets/Coin360-03.png',
                big: 'assets/Coin360-03.png'
            }
        ];
    }

}
