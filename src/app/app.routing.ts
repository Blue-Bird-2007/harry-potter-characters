import { Routes, RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { CreateCharacterComponent } from './create-character/create-character.component';

const routes: Routes = [
  { path: '', component: TabsComponent },
  { path: 'new-character', component: CreateCharacterComponent },
];

export const appRoutingModule = RouterModule.forRoot(routes);