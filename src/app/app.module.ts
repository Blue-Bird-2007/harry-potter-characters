import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HarryPotterService } from './harry-potter.service';
import { LogService } from './log.service';
import { HeaderComponent } from './header/header.component';

const routes = [
  { path: 'characters', component: TabsComponent },
  { path: 'new-character', component: HeaderComponent },
  { path: '**', redirectTo: '/' }
];
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HarryPotterService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
