import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  login = new FormControl('', [Validators.required, Validators.minLength(3)]);
  password = new FormControl('', Validators.required);

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    LastName: new FormControl('', Validators.required),
    adress: new FormControl('', Validators.required),
  })
  formBuilder: any;
  constructor(private fb: FormBuilder) {
    this.formBuilder = fb.group({
      login: ["", [Validators.required, Validators.minLength(3)]],
      password: ["", Validators.required],
    });


  }


  showLogin() {
    console.log(this.login);
  }
  showF() {
    console.log(this.registerForm);
  }
}
