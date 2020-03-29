import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-boring',
  templateUrl: './boring.component.html',
  styleUrls: ['./boring.component.less']
})
export class BoringComponent implements OnInit {

  public boringForm: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.boringForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ''
    });
  }

  public save(): void {
    console.log(this.boringForm.value);
  }

}
