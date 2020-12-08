import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { WechatSampleApplicationSharedModule } from 'app/shared/shared.module';
import { WechatSampleApplicationCoreModule } from 'app/core/core.module';
import { WechatSampleApplicationAppRoutingModule } from './app-routing.module';
import { WechatSampleApplicationHomeModule } from './home/home.module';
import { WechatSampleApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    WechatSampleApplicationSharedModule,
    WechatSampleApplicationCoreModule,
    WechatSampleApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    WechatSampleApplicationEntityModule,
    WechatSampleApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class WechatSampleApplicationAppModule {}
