import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'level',
  templateUrl: 'level.component.html',
  styleUrls: ['level.component.css']
})
export class Level implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public level: number;

}
