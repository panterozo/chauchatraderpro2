import { Component, OnInit } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-coinmarketcap',
  templateUrl: './coinmarketcap.component.html',
  styleUrls: ['./coinmarketcap.component.css']
})
export class CoinmarketcapComponent implements OnInit {

    galleryOptions: NgxGalleryOptions[];
  	galleryImages: NgxGalleryImage[];
 
    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                width: '64%',
                height: '900px',
                thumbnailsColumns: 2,
                imageAnimation: NgxGalleryAnimation.Slide
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/CoinMarketCap.jpg',
                medium: 'assets/CoinMarketCap.jpg',
                big: 'assets/CoinMarketCap.jpg'
            },
            {
                small: 'assets/CoinMarketCap.png',
                medium: 'assets/CoinMarketCap.png',
                big: 'assets/CoinMarketCap.png'
            }
        ];
    }
}
