import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

