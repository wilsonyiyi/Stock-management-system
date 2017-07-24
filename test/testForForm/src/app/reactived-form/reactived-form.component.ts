import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactivedFormComponent implements OnInit {

  // 创建响应式表单的数据模型 或者 数据结构
  private formModel: FormGroup;

  /*
  * 使用FormBuilder重构
  * */
  private fb:FormBuilder = new FormBuilder();

  constructor() {
    // this.formModel = new FormGroup({
    //   nickname: new FormControl(),
    //   emails: new FormArray([
    //     new FormControl("a@a.com"),
    //     new FormControl("b@b.com")
    //   ]),
    //   telephone: new FormControl(),
    //   passwordInfo: new FormGroup({
    //     password: new FormControl(),
    //     passwordConfirm: new FormControl()
    //   })
    // })

    /*
    * FormBuilder 重构
    * */
    this.formModel = this.fb.group({
      nickname: ['xx'],
      emails: this.fb.array([
        ['']
      ]),
      telephone: [''],
      passwordInfo: this.fb.group({
        password: [''],
        passwordConfirm: ['']
      })
    })
  }

  ngOnInit() {
  }


  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value)
  }

}
