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

  // home: Home = {
  //   id: 0,
  //   username: '',
  //   toDo: '',
  //   completed: false
  // }

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
    
    this.toDoObject.username = this.formValue.value.username;
    this.toDoObject.toDo = this.formValue.value.toDo;
    this.toDoObject.completed = true;


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

  onEdit(row: any){
    this.formValue.controls['username'].setValue(row.username);
    this.formValue.controls['toDo'].setValue(row.toDo);
  }
}
