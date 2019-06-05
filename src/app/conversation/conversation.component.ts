import { Input, Output }           from '@angular/core';
import { Component, OnInit }       from '@angular/core';
import { OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit, OnChanges {
  @Input() conv: string[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log("changes: ", changes);
  }
}
