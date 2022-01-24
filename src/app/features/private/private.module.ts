import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';

// re-usable componets
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    PrivateComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HeaderModule
  ]
})
export class PrivateModule { }
