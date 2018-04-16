
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './layout/menu/menu.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentComponent } from './layout/content/content.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LoginComponent } from './login/login.component';
import { PageComponent } from './page/page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { P404Component } from './error/404/404.component';

import { AppRoutingModule } from './app-routing.module';
import { ModuleModule } from './module/module.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    PageComponent,
    P404Component
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModuleModule,
    AppRoutingModule
  ],
  providers: [
      {
          provide:APP_BASE_HREF,
          useValue:'/app'
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
