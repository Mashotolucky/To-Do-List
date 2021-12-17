import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Home } from 'src/app/Interface/home';
import {ApiService} from '../../Services/api.service'

import { toDoModel } from '../toDo-Model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  // home: Home = {
  //   id: 0,
  //   username: '',
  //   toDo: '',
  //   completed: false
  // }

  formEdit !:  FormGroup;

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

}
