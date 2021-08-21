import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from '../home/home.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent]
})
export class ErrorsModule { }
