import { Component, OnInit } from '@angular/core';

import { RouterSettingsService } from '../../services/router-settings/router-settings.service';

@Component({
    selector: 'app-raw-data',
    templateUrl: './raw-data.component.html',
    styleUrls: ['./raw-data.component.scss']
})

export class RawDataComponent implements OnInit {
    constructor(private routerSettingsService: RouterSettingsService) {}
    routerSettings;
    ngOnInit() {
        this.routerSettings = this.routerSettingsService.getRouterSettings();
    }
    changeRouterSettingsHandler(event) {
        const settingsName = event.target.getAttribute('name');
        const settingsValue = event.target.value;
        this.routerSettingsService.changeRouterSettings(settingsName, settingsValue);
    }
}
