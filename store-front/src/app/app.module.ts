import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NgxPopper } from 'angular-popper';
import { FooterComponent } from './component/footer/footer.component';
import { BodyComponent } from './component/body/body.component';
import { ArticlesScrollComponent } from './component/body/articles-scroll/articles-scroll.component';
import { ArticleComponent } from './component/body/article/article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ArticlesScrollComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
