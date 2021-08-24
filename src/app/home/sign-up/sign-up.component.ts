import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {minusculaValidator} from '../../shared/validators/minuscula.validator';
import {UserNotTakenValidatorService} from './user-not-taken.validator.service';
import {NewUser} from './new-user';
import {SignUpService} from './sign-up.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  constructor(private builder: FormBuilder,
              private userNotTakenValServ: UserNotTakenValidatorService,
              private service: SignUpService,
              private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          minusculaValidator
        ],
        this.userNotTakenValServ.checkUserNameTaken()
      ],
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(40)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(14)]]
    });
  }

  signUp() {
    const newUser = this.signUpForm.getRawValue() as NewUser;
    this.service.signUp(newUser).subscribe(() => {
        this.router.navigate(['']);
      },
      err => console.log(err)
    );
  }

}
