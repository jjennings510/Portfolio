import { Component, OnInit } from '@angular/core';
import { ProfileLoaderService } from '../_services/profile-loader.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit{
  images?: string[];

  constructor(private profileLoader: ProfileLoaderService) {}

  ngOnInit(): void {
    this.images = this.profileLoader.getImages();
    console.log(this.images);
  }
  
}
