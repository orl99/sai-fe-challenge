import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { LoginComponent } from './login.component';

// Routing
import { LoginRoutingModule } from './login-routing.module';

// material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


const MATERIAL_COMPONENTS = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    // FormsModule,
    ...MATERIAL_COMPONENTS
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
