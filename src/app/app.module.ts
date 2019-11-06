import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HarryPotterService } from './services/harry-potter.service';
import { LogService } from './services/log.service';
import { HeaderComponent } from './header/header.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes = [
  { path: 'characters', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: ':house', component: ListComponent, }
  ], canActivate: [AuthGuard] },
  { path: 'new-character', component: CreateCharacterComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent,
    CreateCharacterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HarryPotterService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
