import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth/auth.service';
import {Router} from '@angular/router';
import {PlataformDetectorService} from '../../core/plataform/plataform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('userNameInput')
  userNameInput: ElementRef<HTMLInputElement>;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private plataformDetectorService: PlataformDetectorService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.plataformDetectorService.isPlatformBrowser() &&
    this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;
    this.authService
      .authenticate(userName, password)
      .subscribe(
        () => {
          // this.router.navigateByUrl(`user/${userName}`);
          this.router.navigate(['user', userName]);
        },
        err => {
          console.log(err);
          this.loginForm.reset();
          this.plataformDetectorService.isPlatformBrowser() && this.userNameInput.nativeElement.focus();
          alert('Invalid Login / Password!');
        }
      );
  }
}
