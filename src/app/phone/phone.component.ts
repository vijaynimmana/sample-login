import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor(private fb:FormBuilder){}

  registrationForm = this.fb.group({
    phoneNumber : ['',  [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]]
  });

  ngOnInit() {
  }

}
