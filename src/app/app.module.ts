import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthService } from './core/auth.service';
import { routing } from './app.routes';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';
import { TodoModule } from './todo/todo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationComponent } from './test/animation/animation.component';
import { AnimationPipe } from './test/animation.pipe';
import { TestPipeComponent } from './test/test-pipe/test-pipe.component';
import { FetchPipe } from './test/fetch.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AnimationComponent,
    AnimationPipe,
    TestPipeComponent,
    FetchPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing,
    TodoModule
  ],
  providers: [
    {provide: 'auth',  useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
