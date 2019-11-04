import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor(private ot:FormBuilder) { }
  otpVija = this.ot.group({
    key : ['',  [Validators.required, Validators.pattern(/^[0-9]\d{3}$/)]]
  });
  ngOnInit() {
  }

}
