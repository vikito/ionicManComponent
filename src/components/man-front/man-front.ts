import {Component, Output, EventEmitter} from '@angular/core';
/**
 * Generated class for the ManFrontComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'man-front',
  templateUrl: 'man-front.html'
})
export class ManFrontComponent {

  text: string;

  @Output()
  valueUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello ManFrontComponent Component');
    this.text = 'Push me to update my parent';
  }

  updateParents(){
    this.valueUpdate.emit('something updated');
  }


}
