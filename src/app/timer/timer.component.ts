import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.css']
})
export class Timer implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public time: number;

}
