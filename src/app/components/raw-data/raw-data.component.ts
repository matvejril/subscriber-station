import {Component, HostBinding, OnInit} from '@angular/core';

import { RouterSettingsService } from '../../services/router-settings/router-settings.service';

import { IrouterSettings } from '../../interfaces';

@Component({
    selector: 'app-raw-data',
    templateUrl: './raw-data.component.html',
    styleUrls: ['./raw-data.component.scss'],
})

export class RawDataComponent implements OnInit {
    @HostBinding('class') class = 'raw-data';
    constructor(private routerSettingsService: RouterSettingsService) {}
    routerSettings: IrouterSettings;
    ngOnInit() {
        this.routerSettings = this.routerSettingsService.getRouterSettings();
    }
    changeRouterSettingsHandler(event) {
        const settingsName = event.target.getAttribute('name');
        const settingsValue = event.target.value;
        this.routerSettingsService.changeRouterSettings(settingsName, settingsValue);
    }
}
