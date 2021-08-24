import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SigninComponent } from './home/signin/signin.component';
import {AuthGuard} from './core/auth/auth.guard';
import {SignUpComponent} from './home/sign-up/sign-up.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    // {
    //     path: 'user/:userName',
    //     component: PhotoListComponent,
    //     resolve: {
    //         photos: PhotoListResolver
    //     }
    // },
    // {
    //     path: 'p/add',
    //     component: PhotoFormComponent
    // },
    // {
    //     path: '**',
    //     component: NotFoundComponent
    // },
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
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

