import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'to-do-list';
  date = new Date();
  todoitem:any;
  @ViewChild('todolist')
  textarea!: ElementRef ;
  constructor(){} 

  ngOnInit(): void {
    setInterval(()=>{
      this.date = new Date();
  },1000);

}
submit(){
  this.textarea.nativeElement.value = 'submitted'
}

}
