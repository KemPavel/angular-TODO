import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTS
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { LiveCycleComponent } from './components/live-cycle/live-cycle.component';

// DIRECTIVES
import { BoldDirective } from './directives/bold.directive';
import { ItalicDirective } from './directives/italic.directive';
import { ColorDirective } from './directives/color.directive';
import { WhileDirective } from './directives/while.directive';
import { LoginComponent } from './components/login/login.component';

//SERVICES
import { DataService } from './services/data.service';
import { LogService } from './services/log.service';

import { CKEditorModule } from 'ng2-ckeditor';


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    HomeComponent,
    EditTodoComponent,
    LiveCycleComponent,
    BoldDirective,
    ItalicDirective,
    ColorDirective,
    WhileDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  providers: [
    DataService,
    LogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
