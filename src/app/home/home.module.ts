import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import {RouterModule} from '@angular/router';
import {CoreModule} from '../core/core.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home.routing.module';
import {SignUpService} from './sign-up/sign-up.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    VMessageModule,
    RouterModule,
    CoreModule,
    HomeRoutingModule
  ],
  declarations: [SigninComponent, SignUpComponent, HomeComponent],
  providers: [SignUpService]
})
export class HomeModule { }
