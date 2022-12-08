import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { UIShellModule, IconModule } from 'carbon-components-angular';
import { NotificationModule, UserAvatarModule, AppSwitcherModule } from '@carbon/icons-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIShellModule,
    IconModule,
    NotificationModule,
    UserAvatarModule,
    AppSwitcherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(protected iconService: IconService) {
  //   iconService.registerAll([
  //     Notification20,
  //     UserAvatar20,
  //     AppSwitcher20,
  //   ]);
  // }
}
