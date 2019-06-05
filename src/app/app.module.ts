/* Angular Modules */
import { NgModule }         from '@angular/core';
import { RouterModule }     from '@angular/router';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

/* Application Components */
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { SceneComponent }        from './scene/scene.component';
import { ConversationComponent } from './conversation/conversation.component';

@NgModule({
  declarations: [
    AppComponent,
    SceneComponent,
    ConversationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: SceneComponent, pathMatch: 'full' },
      { path: 'scene', component: SceneComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
