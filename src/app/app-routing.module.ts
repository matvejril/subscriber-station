import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RawDataComponent } from './components/raw-data/raw-data.component';
import { RouterSettingsComponent } from './components/router-settings/router-settings.component';

const routes: Routes = [
    {path: 'raw', component: RawDataComponent},
    {path: 'settings', component: RouterSettingsComponent},
    {path: '', redirectTo: 'settings', pathMatch: 'full'},
    {path: '**', redirectTo: 'settings', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
