import { Component, OnInit } from '@angular/core';
import {Home} from '../../Interface/home';
import {ApiService} from '../../Services/api.service'

import {FormBuilder, FormGroup } from '@angular/forms';
import { toDoModel } from '../toDo-Model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  home: Home = {
    id: 0,
    username: '',
    toDo: '',
    completed: false
  }

  toDoObject: toDoModel = new toDoModel();

  formValue !:  FormGroup;


  constructor(private formbuilber: FormBuilder,
    private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      username: [''],
      toDo: ['']
    })
  }

  postToDo(){
    let x = 0;

    // this.home.id = x++;
    // this.home.username = this.formValue.value.username;
    // this.home.toDo = this.formValue.value.toDo;
    // this.home.completed = true;

    // this.toDoObject.id = x++;
    this.toDoObject.username = this.formValue.value.username;
    this.toDoObject.toDo = this.formValue.value.toDo;
    this.toDoObject.completed = true;


    this.api.postToDo(this.toDoObject)
    .subscribe(res=>{
      console.log(res);
      alert("To-Do List added successfully");
    },
    err=>{
      alert("Something went wrong");
      this.formValue.reset();
    })
  }

}
