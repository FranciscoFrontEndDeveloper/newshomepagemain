import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MenuComponent } from './components/menu/menu.component';
import { TitleComponent } from './components/title/title.component';
import { NewsComponent } from './components/news/news.component';
import { TopsComponent } from './components/tops/tops.component';
import { TextsComponent } from './components/texts/texts.component';
import { ImagesComponent } from './components/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomepageComponent,
    MenuComponent,
    TitleComponent,
    NewsComponent,
    TopsComponent,
    TextsComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
