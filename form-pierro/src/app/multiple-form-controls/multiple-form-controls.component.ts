import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,

} from '@angular/forms';

@Component({
  selector: 'app-multiple-form-controls',
  templateUrl: './multiple-form-controls.component.html',
  styleUrls: ['./multiple-form-controls.component.css']
})
export class MultipleFormControlsComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required],
      'price' : ['', Validators.required],
      'webpage' : ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
