import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthenticationModule } from './user-auth/user-auth.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { InlineListComponent } from './inline-list/inline-list.component';
import { InlineTemplatelistComponent } from './inline-templatelist/inline-templatelist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    InlineListComponent,
    InlineTemplatelistComponent
  ],
  imports: [
    BrowserModule,
    UserAuthenticationModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
