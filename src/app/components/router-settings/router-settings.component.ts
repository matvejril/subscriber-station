import { Component, HostBinding, OnInit } from '@angular/core';

import { RouterSettingsService } from '../../services/router-settings/router-settings.service';

import { IrouterSettings } from '../../interfaces';

@Component({
    selector: 'app-router-settings',
    templateUrl: './router-settings.component.html',
    styleUrls: ['./router-settings.component.scss'],
})

export class RouterSettingsComponent implements OnInit {
    @HostBinding('class') class = 'router-settings';
    constructor(private routerSettingsService: RouterSettingsService) {}
    routerSettings: IrouterSettings;
    ngOnInit() {
        this.routerSettings = this.routerSettingsService.getRouterSettings();
    }
    applySettingsHandler(form) {
        const keys = Object.keys(form.controls);
        for (let i = 0; i < keys.length; i++) {
            const control = form.controls[keys[i]];
            control.markAsDirty();
        }
        if (form.valid) {
            this.routerSettingsService.applyRouterSettings(this.routerSettings);
        }
    }
    changeExtendedChannelHandler() {
        this.routerSettingsService.changeExtendedChannel(this.routerSettings);
    }
    selectChannelHandler(e) {
        const getValue = e.target.innerHTML.replace( /\s/g, '');
        const isContain = this.routerSettings.channelLimitSelect.indexOf(getValue);
        if (isContain === -1) {
            this.routerSettings.channelLimitSelect.push(getValue);
            e.target.classList.add('select');
        } else {
            this.routerSettings.channelLimitSelect.splice(isContain, 1);
            e.target.classList.remove('select');
        }
    }
}
