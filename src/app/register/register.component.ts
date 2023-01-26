import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ApiServiceTsService } from '../services/api-service.ts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  fileinput: any;
  constructor(
    public fb: FormBuilder,
    private apiService:ApiServiceTsService
  ) { }

  ngOnInit(): void {
    this.registerInIt();

  }


  registerInIt() {
    this.registerForm = this.fb.group({
      fullName: [null, Validators.required],
      emailId: [null, Validators.required],
      password: [null, Validators.required],
      mobileNumber: [null, Validators.required],
      workStaus:[null, Validators.required],
      resume: [null, Validators.required],
    })
  }

  addDetails() {
    this.apiService.register(this.registerForm.value).subscribe((res: any) => {
      console.log(res);
    })
  }

  OnSubmit() {
  this.addDetails();
    
  }
}
