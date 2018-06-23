import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// COMPONENTS
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { LiveCycleComponent } from './components/live-cycle/live-cycle.component';
import { AccessControlComponent } from './components/access-control/access-control.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FiltersComponent } from './components/filters/filters.component';

// DIRECTIVES
import { BoldDirective } from './directives/bold.directive';
import { ItalicDirective } from './directives/italic.directive';
import { ColorDirective } from './directives/color.directive';
import { WhileDirective } from './directives/while.directive';
import { LoginComponent } from './components/login/login.component';

// PIPES
import { FactorialPipe } from './pipes/factorial.pipe';
import { JoinPipe } from './pipes/join.pipe';

// SERVICES
import { DataService } from './services/data/data.service';
import { LogService } from './services/log/log.service';
import { HttpService } from './services/http/http.service';
import { TodosService } from './services/todos/todos.service';

// GUARDS
import { AuthGuard } from './guards/auth.guard';
import { PendingChangesGuard } from './guards/pending-changes.guard';

// VENDORS
import { CKEditorModule } from 'ng2-ckeditor';

// REDUCERS
import { todosReducer } from './store/todos/todos.reducer';
import { filtersReducer } from './store/filters/filters.reducer';

//EFFECTS
import { TodosEffects } from './effects/todos.effects';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAccessComponent } from './components/user-access/user-access.component';


const accessControlChildRoutes: Routes = [
  { path: 'details', component: UserDetailsComponent, canActivate: [ AuthGuard ], canDeactivate: [ PendingChangesGuard ] },
  { path: 'access', component: UserAccessComponent, canActivate: [ AuthGuard ], canDeactivate: [ PendingChangesGuard ] }
];

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: EditTodoComponent },
  { path: 'access-control', component: AccessControlComponent, canActivate: [ AuthGuard ], canDeactivate: [ PendingChangesGuard ] },
  { path: 'access-control/:id', component: AccessControlComponent, canActivate: [ AuthGuard ], canDeactivate: [ PendingChangesGuard ] },
  { path: 'access-control/:id', component: AccessControlComponent, children: accessControlChildRoutes },
  { path: '**', redirectTo: '/'}
  // { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    EditTodoComponent,
    LiveCycleComponent,
    BoldDirective,
    ItalicDirective,
    ColorDirective,
    WhileDirective,
    LoginComponent,
    AccessControlComponent,
    TodoItemComponent,
    FiltersComponent,
    UserDetailsComponent,
    UserAccessComponent,
    FactorialPipe,
    JoinPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({ 
      // user: userReducer,
      filters: filtersReducer,
      todos: todosReducer 
    }),
    EffectsModule.forRoot([
      TodosEffects
    ])
  ],
  providers: [
    DataService,
    LogService,
    HttpService,
    TodosService, 
    AuthGuard,
    PendingChangesGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
