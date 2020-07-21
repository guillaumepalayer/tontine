import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user, timer, manager_actions, refresh_actions } from '../../betokenjs/helpers';
import { BigNumber } from 'bignumber.js';

import { ApolloEnabled } from '../apollo';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { isNull } from 'util';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html'
})

export class SideNavComponent extends ApolloEnabled implements OnInit {
  days: Number;
  hours: Number;
  minutes: Number;
  seconds: Number;
  phase: Number;

  ZERO_ADDR = '0x0000000000000000000000000000000000000000';
  can_redeem_commission: boolean;
  isManager: Boolean;
  hasUpdatedTimer: Boolean;

  user_address: String;

  constructor(private router: Router, private apollo: Apollo) {
    super();
    this.days = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.phase = 0;

    this.isManager = true;
    this.can_redeem_commission = false;
    this.hasUpdatedTimer = false;

    this.user_address = this.ZERO_ADDR;
  }

  ngOnInit() {
    this.refreshDisplay();
    setInterval(() => this.updateTimer(), 1000);
  }

  updateTimer() {
    this.days = timer.day();
    this.hours = timer.hour();
    this.minutes = timer.minute();
    this.seconds = timer.second();
    this.phase = timer.phase();
    this.hasUpdatedTimer = true;
  }

  refreshDisplay() {
    let userAddress = user.address().toLowerCase();
    this.user_address = user.address();
    this.querySubscription = this.apollo
      .watchQuery({
        pollInterval: this.pollInterval,
        fetchPolicy: this.fetchPolicy,
        query: gql`
          {
            fund(id: "BetokenFund") {
              cyclePhase
              cycleNumber
            }
            manager(id: "${userAddress}") {
              lastCommissionRedemption
            }
          }
        `
      })
      .valueChanges.subscribe(({ data, loading }) => {
        if (!loading) {
          let fund = data['fund'];
          let manager = data['manager'];

          this.isManager = !isNull(manager);
          this.phase = fund.cyclePhase === 'INTERMISSION' ? 0 : 1;

          if (this.isManager) {
            this.can_redeem_commission = this.phase == 0 && +manager.lastCommissionRedemption < +fund.cycleNumber && userAddress !== this.ZERO_ADDR;
          }
        }
      });
  }

  checkRouterURL(route) {
    return this.router.url === route;
  }

  nextPhase() {
    manager_actions.nextPhase();
  }

  async reloadAll() {
    await refresh_actions.reload_all();
    this.refreshDisplay();
  }
}
