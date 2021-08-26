import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {AuthGuard} from '../core/auth/auth.guard';
import {SigninComponent} from './signin/signin.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
        {
          path: '',
          component: SigninComponent
        },
        {
          path: 'signup',
          component: SignUpComponent
        }
      ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

