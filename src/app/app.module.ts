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
import { EchartsModule} from './echarts/echarts.module';
import { AppLightHightDirective } from './test/app-light-hight.directive';
import { TestDirectiveComponent } from './test/test-directive/test-directive.component';
import { ConstructionDirective } from './test/construction.directive';
import { ParentComponent } from './test/parent/parent.component';
import { ChildComponent } from './test/child/child.component';
import { ChildService } from './test/child/child.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AnimationComponent,
    AnimationPipe,
    TestPipeComponent,
    FetchPipe,
    AppLightHightDirective,
    TestDirectiveComponent,
    ConstructionDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    routing,
    TodoModule,
    EchartsModule
  ],
  providers: [
    {provide: 'auth',  useClass: AuthService},ChildService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
