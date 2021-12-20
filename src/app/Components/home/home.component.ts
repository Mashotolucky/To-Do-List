import { Component, OnInit } from '@angular/core';
import {Home} from '../../Interface/home';
import {ApiService} from '../../Services/api.service'

import {FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { toDoModel } from '../toDo-Model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  formValue = new FormGroup({
     username: new FormControl('',Validators.required),
     toDo: new FormControl('')
  })

  toDoObject: toDoModel = new toDoModel();


  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      username: [''],
      toDo: ['']
    })
  }



  postToDo(){
    
    this.toDoObject.username = this.formValue.value.username.trim();
    this.toDoObject.toDo = this.formValue.value.toDo.trim();
    this.toDoObject.completed = true;

    if(this.toDoObject.username != '' && this.toDoObject.toDo != ''){

      this.api.postToDo(this.toDoObject)
      .subscribe(res=>{
        console.log(res);
        alert("To-Do List added successfully");
        this.formValue.reset();
      },
      err=>{
        alert("Something went wrong");
        this.formValue.reset();
    })
    }
    else{
      alert("Fields cannot be empty!!");
    }
    
    
  }

}
