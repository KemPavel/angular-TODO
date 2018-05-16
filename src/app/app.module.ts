import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// COMPONENTS
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { HomeComponent } from './components/home/home.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { LiveCycleComponent } from './components/live-cycle/live-cycle.component';
import { AccessControlComponent } from './components/access-control/access-control.component';

// DIRECTIVES
import { BoldDirective } from './directives/bold.directive';
import { ItalicDirective } from './directives/italic.directive';
import { ColorDirective } from './directives/color.directive';
import { WhileDirective } from './directives/while.directive';
import { LoginComponent } from './components/login/login.component';

// SERVICES
import { DataService } from './services/data.service';
import { LogService } from './services/log.service';
import { HttpService } from './services/http.service';

// VENDORS
import { CKEditorModule } from 'ng2-ckeditor';


const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todo', component: EditTodoComponent },
  { path: 'access-control', component: AccessControlComponent },
  { path: '**', redirectTo: '/'}
  // { path: '**', component: NotFoundComponent }
]


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
    LoginComponent,
    AccessControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService,
    LogService,
    HttpService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
