import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  customOptions = {};
  customOptions1 = {};

  constructor() { }

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      center: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 1500,
      autoplay: false,
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      dotsSpeed: 1500,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 1
        },
      },
      nav: true
    };
    this.cargarData();
    this.customOptions1 = {
      loop: true,
      center: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 1500,
      autoplay: false,
      autoplayHoverPause: true,
      autoplaySpeed: 1500,
      dotsSpeed: 1500,
      navText: ['', ''],
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 3
        },
        740: {
          items: 5
        },
      },
      nav: true
    };
    this.cargarData();
  }





  // tslint:disable-next-line: typedef
  cargarData() {
    this.data = [
      {
        imgCarousel: 'imgCarousel',
      },
      {
        imgCarousel: 'imgCarousel',
      },
      {
        imgCarousel: 'imgCarousel',
      },
      {
        imgCarousel: 'imgCarousel',
      },
      {
        imgCarousel: 'imgCarousel',
      },
      {
        imgCarousel: 'imgCarousel',
      },
      {
        imgCarousel: 'imgCarousel',
      },
    ];
  }

}
