import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  processing: boolean;
  submitted: boolean;
  message: string;
  messageClass: string;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   
  }

  disableForm() {
    this.loginForm.controls['username'].disable;
    this.loginForm.controls['password'].disable;
  }

  enableForm() {
    this.loginForm.controls['username'].enable;
    this.loginForm.controls['password'].enable;
   
  }

  f() {
    return this.loginForm.controls;
   
  }


  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.processing = true;
    this.disableForm();
  }

}
