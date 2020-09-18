import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [];
  customOptions = {};

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
