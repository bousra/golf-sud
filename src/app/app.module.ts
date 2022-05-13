import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainContentComponent } from './main-content/main-content.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { PresentationComponent } from './presentation/presentation.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    MainContentComponent,
    PresentationComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
