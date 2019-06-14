import { Input, Output }           from '@angular/core';
import { Component, OnInit }       from '@angular/core';
import { OnChanges, SimpleChange } from '@angular/core';
import { Person, Dialogue }        from '../scene/scene.model';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnChanges {
  @Input() conv: Dialogue[];

  constructor() {
  }

  ngOnInit() {
  }

  moveLeft(line: Dialogue) {
    console.log("Move Left: ", line);
  }

  moveRight(line: Dialogue) {
    console.log("Move Right: ", line);
  }

  deleteLine(line: Dialogue) {
    console.log("Delete Line: ", line);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("changes: ", changes);
  }
}
