import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { RawDataComponent } from './components/raw-data/raw-data.component';
import { RouterSettingsComponent } from './components/router-settings/router-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HeaderNavComponent,
    RawDataComponent,
    RouterSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
