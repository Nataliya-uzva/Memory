import { Injectable } from '@angular/core';
import { ImageService } from './image-service.service';

@Injectable()
export class ItemService {

  constructor (private imageService: ImageService) {
  }

  generateList(count){
    let arr1 = [];
    var len = (count % 2 === 0) ? count : (count+1);
    let arr = this.imageService.getMixedArray(count);
    for(let i = 0; i < len; i++){
      arr1.push({class: arr[i], isOpen: false, isHidden: false});
    }
    return arr1;
  }

}
