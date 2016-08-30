import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cell',
  templateUrl: 'cell.component.html',
  styleUrls: ['cell.component.css', 'styles-clases.css']
})
export class Cell implements OnInit {

  @Input()
  cell: any;
  @Input()
  public stopClick: boolean;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setState(){
    if (!this.stopClick) {
      this.cell.isOpen = !this.cell.isOpen;
      this.remove.emit({cell: this.cell});
    }
  }
}
