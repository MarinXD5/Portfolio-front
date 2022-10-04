import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectsService } from './services/projects.service';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { AutobiographyComponent } from './components/autobiography/autobiography.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ContactComponent,
    AutobiographyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
