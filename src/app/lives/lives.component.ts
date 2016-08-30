import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lives',
  templateUrl: 'lives.component.html',
  styleUrls: ['lives.component.css']
})
export class Lives implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public lives: number;
}
