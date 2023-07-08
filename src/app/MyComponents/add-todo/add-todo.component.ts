import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {

  title:String
  desc:String
  @Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
  
  onSubmit(){
    const todo={
      sno: 2,
    title: this.title,
    desc: this.desc,
    active: true
      

    }
    // console.log(todo)
    this.todoAdd.emit(todo);


  }

}
