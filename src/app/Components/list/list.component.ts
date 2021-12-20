import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Home } from 'src/app/Interface/home';
import {ApiService} from '../../Services/api.service'
import { HomeComponent } from '../home/home.component';

import { toDoModel } from '../toDo-Model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})



export class ListComponent implements OnInit {

  formEdit = new FormGroup({
    username: new FormControl('',Validators.required),
    toDo: new FormControl('')
 })

 toDoObject: toDoModel = new toDoModel();


  list !: any;

  constructor(private http: HttpClient,
    private api:ApiService) { }

  ngOnInit(): void {

    this.getAllList();
  }

  getAllList(){
    this.api.getToDo()
    .subscribe(res=>{
      this.list = res;
    })
  }

  deleteList(row:any){
    if(confirm("Are you sure to delete")){
       this.api.deleteToDo(row.id)
      .subscribe(res=>{
        alert("To-Do Deleted");
        this.getAllList();
      })
    }
   
  }

  
  

  onEdit(row: any){
    this.toDoObject.id = row.id;
    this.formEdit.controls['username'].setValue(row.username);
    this.formEdit.controls['toDo'].setValue(row.toDo);

    console.log(this.toDoObject.id);
    console.log(this.toDoObject)
  }

  updateList(){

    this.toDoObject.username = this.formEdit.value.username;
    this.toDoObject.toDo = this.formEdit.value.toDo;
    
    this.api.updateToDo(this.toDoObject,this.toDoObject.id)
    .subscribe(res=>{
      alert("Saved successfully");
      this.formEdit.reset();
    })
  }

}

