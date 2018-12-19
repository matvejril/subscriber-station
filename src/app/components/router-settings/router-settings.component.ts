import { Component, HostBinding, OnInit } from '@angular/core';

import { RouterSettingsService } from '../../services/router-settings/router-settings.service';

import { channelBondingConfig } from '../../shared/channeslConfig';

@Component({
    selector: 'app-router-settings',
    templateUrl: './router-settings.component.html',
    styleUrls: ['./router-settings.component.scss'],
})

export class RouterSettingsComponent implements OnInit {
    @HostBinding('class') class = 'router-settings';
    constructor(private routerSettingsService: RouterSettingsService) {}
    routerSettings;
    channelBondingList: string[];
    ngOnInit() {
        this.routerSettings = this.routerSettingsService.getRouterSettings();
        this.channelBondingList = channelBondingConfig;
    }
    applySettingsHandler() {
        this.routerSettingsService.applyRouterSettings(this.routerSettings);
    }
    changeExtendedChannelHandler() {
        this.routerSettingsService.changeExtendedChannel(this.routerSettings);
    }
}
