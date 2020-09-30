import { ArticleService } from './services/article.service';
import { Routes } from '@angular/router';
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
import { FormsModule } from  '@angular/forms'
import { HttpClientModule } from "@angular/common/http";

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
    EmprenComponent,
    ContactComponent,
    BlogcardComponent,
    CardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
