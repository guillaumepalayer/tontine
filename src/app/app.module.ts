import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InAppNotificationComponent } from './in-app-notification/in-app-notification.component';
import { RewardsComponent } from './rewards/rewards.component';
import { InviteComponent } from './invite/invite.component';
import { ModalBuyShareComponent } from './modal-buy-share/modal-buy-share.component';
import { ModalSellShareComponent } from './modal-sell-share/modal-sell-share.component';
import { ModalStakeComponent } from './modal-stake/modal-stake.component';
import { FundComponent } from './fund/fund.component';
import { FundOverviewComponent } from './fund-overview/fund-overview.component';
import { FundTransactionHistoryComponent } from './fund-transaction-history/fund-transaction-history.component';
import { FundRankingComponent } from './fund-ranking/fund-ranking.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PoolsComponent } from './pools/pools.component';
import { InvestmentsComponent } from './investments/investments.component';
import { InvestorComponent } from './investor/investor.component';
import { ManageronboardingComponent } from './manager-onboarding/manageronboarding.component';
import { InvestoronboardingComponent } from './investor-onboarding/investoronboarding.component';
import { MarketComponent } from './market/market.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pools',
    pathMatch: 'full'
  },
  {
    path: 'pools',
    component: PoolsComponent,
    pathMatch: 'full'
  },
  {
    path: 'rewards',
    component: RewardsComponent,
    pathMatch: 'full'
  },
  {
    path: 'invite',
    component: InviteComponent,
    pathMatch: 'full'
  },
  {
    path: 'pool',
    component: FundComponent,
    pathMatch: 'full'
  },
  {
    path: 'investments',
    component: InvestmentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'invest',
    component: InvestorComponent,
    pathMatch: 'full'
  },
  {
    path: 'market',
    component: MarketComponent,
    pathMatch: 'full'
  },
  {
    path: 'investing-dashboard',
    redirectTo: '/invest',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: InvestoronboardingComponent,
    pathMatch: 'full'
  },
  {
    path: 'start-managing',
    component: ManageronboardingComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InAppNotificationComponent,
    FooterComponent,
    RewardsComponent,
    InviteComponent,
    ModalBuyShareComponent,
    ModalSellShareComponent,
    ModalStakeComponent,
    FundComponent,
    FundOverviewComponent,
    FundTransactionHistoryComponent,
    FundRankingComponent,
    SideNavComponent,
    PoolsComponent,
    InvestmentsComponent,
    InvestorComponent,
    InvestoronboardingComponent,
    ManageronboardingComponent,
    MarketComponent,
  ],
  imports: [
    AccordionModule.forRoot(),
    BrowserModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    GraphQLModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
