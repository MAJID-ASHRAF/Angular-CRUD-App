import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//material modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';

// service
import { UserService } from './services/user.service';

//router
import { RouterModule, Routes } from '@angular/router';
//components
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginFormComponent } from './login-form/login-form.component';

//httpclient module
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes= [
  {path:'', component:LoginFormComponent},
  {path: 'login',component:LoginFormComponent },
  {path: 'signup',component:RegisterComponent },
  {path: 'userlist',component:UserListComponent }

]


 @NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatSnackBarModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { };
