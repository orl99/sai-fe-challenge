import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Components
import { ArticlesComponent } from './articles.component';


// Routing
import { ArticlesRoutingModule } from './articles-routing.module';

// material
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    MatTableModule
  ]
})
export class ArticlesModule { }
