import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() cheackbox:EventEmitter<Todo>=new EventEmitter();
  onClick(todo:Todo){
    // console.log("onlclick has been lciked")
    this.todoDelete.emit(todo);

      
  }
  onCheckboxClick(todo:Todo){
    this.cheackbox.emit(todo);
   
  }
  constructor(){
   

  }

}
