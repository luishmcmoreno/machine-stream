import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginCredentials } from '../../models/login.model';

@Component({
  selector: 'app-login-dumb',
  templateUrl: './login-dumb.component.html',
  styleUrls: ['./login-dumb.component.scss']
})
export class LoginDumbComponent implements OnInit {

  @Output() login = new EventEmitter<ILoginCredentials>();
  loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public send(): void {
    this.login.emit(this.loginFormGroup.getRawValue());
  }

  private buildForm(): void {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

}
