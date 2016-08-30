import { Component } from '@angular/core';
// components
import { Cell } from './cell';
import { Lives } from './lives';
import { Timer } from './timer';
import { Level } from './level';
//services
import { ItemService } from './services/item-service.service';
import { ImageService } from './services/image-service.service';
//import { CheckLevelService } from 'app/services/check-level-service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Cell, Lives, Timer, Level],
  providers: [ImageService, ItemService]
})

export class AppComponent {

  private tempSell: any = {};
  private list = [];
  private stopClick = false;
  private level = 1;
  public lives = 3;
  private time: number;
  private startLevel = true;
  private count = 0;
  private checkTimer = true;
  private winLevel = false;
  private lostLevel = false;
  public showField = false;
  private timerId;


  constructor(private _itemService: ItemService) {

  }

  checkLevel () {
    switch (this.level) {
      case 1 : this.list = this._itemService.generateList(12);
        this.time = 30*1000;
        break;
      case 2 : this.list = this._itemService.generateList(20);
        this.time = 60*1000;
        break;
      case 3 : this.list = this._itemService.generateList(36);
        this.time = 90*1000;
        break;
      default:
        console.log ('something went wrong!')
    }
  }


  destroy(cell){
    if (!this.tempSell.class) {
      this.tempSell = cell;

    } else {
      this.stopClick = true;
      setTimeout(() => {
        if (this.tempSell === cell) {
          cell.isOpen = false;

        } else if (this.tempSell.class === cell.class) {
          this.tempSell.isHidden = !this.tempSell.isHidden;
          cell.isHidden = !cell.isHidden;
          this.count += 2;
          if (this.count === this.list.length) {
            this.checkTimer = false;
            this.showField = false;
          }
        } else {
          this.tempSell.isOpen = false;
          cell.isOpen = false;
        }
        this.tempSell = {};
        this.stopClick = false;
      }, 300);
    }
  }

  startGame() {
    if (this.winLevel) {
      if(this.level != 3) {
        this.level++;
        this.winLevel = false;
      } else {
        this.level = 1;
        this.lives = 3;
        this.winLevel = false;
      }
    }
    if (this.lostLevel) {
      if (this.lives) {
        this.lostLevel = false;
      } else {
        this.level = 1;
        this.lives = 3;
        this.lostLevel = false;

      }

    }
    this.checkLevel();
    this.getTime();
  }

  getTime () {

    this.timerId = setInterval (() => this.changeTime(), 1000);
  }

  changeTime() {
    if (this.checkTimer) {
      if (!this.time) {
        this.lives--;
        this.showField = false;
        this.lostLevel = true;
        this.list.length = 0;
        this.count = 0;

        clearInterval(this.timerId);
        return;
      }
    } else {
      this.winLevel = true;
      clearInterval(this.timerId);
      this.list.length = 0;
      this.checkTimer = true;
      this.count = 0;
      return;
    }

    return this.time = this.time - 1000;
  }

}
