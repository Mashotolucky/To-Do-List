import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Home } from 'src/app/Interface/home';
import {ApiService} from '../../Services/api.service'

import { toDoModel } from '../toDo-Model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  home: Home = {
    id: 0,
    username: '',
    toDo: '',
    completed: false
  }

  list !: any;

  constructor(private http: HttpClient,
    private api:ApiService) { }

  ngOnInit(): void {
  }

  getAllList(){
    this.api.getToDo()
    .subscribe(res=>{

    })
  }

}
