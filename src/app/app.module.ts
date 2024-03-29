import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from './../environments/environment';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SubscriberService } from './services/subscriber.service';
import { CommentService } from './services/comment.service';
import { VisitService } from './services/visit.service';
import { EndPointsService } from './services/end-points.service';
import { ArticleService } from './services/article.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { LandingComponent } from './components/landing/landing.component';
import { FooterComponent } from './components/footer/footer.component';
import { FootComponent } from './components/foot/foot.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EmprenComponent } from './components/empren/empren.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogcardComponent } from './components/blogcard/blogcard.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { CommentComponent } from './components/comment/comment.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LandingComponent,
    FooterComponent,
    FootComponent,
    MainBodyComponent,
    BlogComponent,
    AboutComponent,
    ProjectsComponent,
    CommentComponent,
    EmprenComponent,
    ContactComponent,
    BlogcardComponent,
    CardDetailsComponent,
    CommentComponent,
    AdminComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ArticleService, EndPointsService, VisitService, CommentService, SubscriberService, DeviceDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
