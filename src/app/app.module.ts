import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './Admin/login/login.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes, Router} from '@angular/router';
import { VideoslistComponent } from './customer/videoslist/videoslist.component';
import { ReserveComponent } from './customer/reserve/reserve.component';
import { FormsModule } from '@angular/forms';
import { MainAdminComponent } from './Admin/main-admin/main-admin.component';
import { UpdateComponent } from './Admin/update/update.component';
import { AddComponent } from './Admin/add/add.component';
import { CustomersComponent } from './Admin/customers/customers.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { GetService } from './get.service';
import { FilterPipe} from './filter.pipe';


const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: '',
  component: VideoslistComponent
  },
  {
    path: 'reserve',
    component: ReserveComponent
  },
  {
    path: 'mainAdmin',
    component: MainAdminComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    VideoslistComponent,
    ReserveComponent,
    MainAdminComponent,
    UpdateComponent,
    AddComponent,
    CustomersComponent,
    FilterPipe

  ],

  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule

  ],
  providers: [GetService],
  bootstrap: [AppComponent],
})
export class AppModule { }
