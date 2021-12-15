import { Component, OnInit } from '@angular/core';
import {Home} from '../../Interface/home';

import {FormBuilder, FormGroup } from '@angular/forms';

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

  formValue !:  FormGroup;

  constructor(private formbuilber: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      username: [''],
      toDo: ['']
    })
  }

}
