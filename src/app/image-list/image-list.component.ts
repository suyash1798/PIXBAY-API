import { Component, OnInit } from '@angular/core';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  constructor(private imageserv: ImageService) { }

  ngOnInit() {
  }

  setdata(data)
  {
    this.images = data.hits;
    console.log(data);
  }
  searchImages(query: string) {
    return this.imageserv.getImage(query).subscribe(
      data => this.setdata(data),
      error => console.log(error),
      () => console.log('Request completed')
    );
  }

}
