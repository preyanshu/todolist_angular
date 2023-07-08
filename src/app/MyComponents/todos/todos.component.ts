import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:String;
  todos:Todo[];
  constructor(){
     if (localStorage.getItem("todos")==null){
      this.todos=[];
     }
     else{
      this.todos=JSON.parse(localStorage.getItem("todos")!);

     }
      
    
    

    
  }
  deletefunction(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1)
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }
  Addfunction(todo:Todo){
    console.log(todo);
    // const index=this.todos.indexOf(todo);
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }
  togglefunction(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active=!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos))

  }
  


}
