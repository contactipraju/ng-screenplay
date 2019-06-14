import { Component, OnInit } from '@angular/core';
import { Person, Dialogue }  from './scene.model';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit {
  firstperson: Person;
  secondperson: Person;

  dialogue: string = "";
  conversation: Dialogue[] = [];

  constructor() {
    this.firstperson  = { id: 1, firstname: "KYLE",  lastname: "" };
    this.secondperson = { id: 2, firstname: "DIANE", lastname: "" };
  }

  ngOnInit() {
  }

  addDialogue(person: Person) {
    let d: Dialogue = {
      who: person.id,
      what: this.dialogue,
      klass: person.id==1?'first':'second'
    };

    this.conversation.push(d);
    this.conversation = this.conversation.slice();
    this.dialogue = "";
  }

  keyPress(e: any) {
    if(e.ctrlKey) {
      switch(e.keyCode) {
        case 0: // Ctrl + Space
          this.addDialogue(this.firstperson);
        break;

        case 10: // Ctrl + Enter
          this.addDialogue(this.secondperson);
        break;
      }
    }
  }
}
