import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})
  fileinput: any;
  constructor(
    public fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  registerInIt() {
    this.registerForm = this.fb.group({


    })
  }
  OnSubmit() {

  }
}
