import { extendedChannelConfig } from '../../shared/channeslConfig';

interface IrouterSettings {
    ssid: string;
    channelBonding: string;
    wpaKey: string;
    extendedChannel: boolean;
    useChannelLimit: boolean;
    channelLimit: string[];
}

export class RouterSettingsService {
    constructor() { }
    routerSettings = {};
    getRouterSettings() {
        return  {...this.routerSettings};
    }
    changeRouterSettings(name: string, value: any) {
        let valueToType: any;
        switch (name) {
            case('extendedChannel'): {
                (value === 'true' || value === true) ? valueToType = true : valueToType = false;
                break;
            }
            case('useChannelLimit'): {
                (value === 'true' || value === true) ? valueToType = true : valueToType = false;
                break;
            }
            case('channelLimit'): {
                valueToType = value.split(',');
                break;
            }
            default: {
                valueToType = value;
            }
        }
        this.routerSettings[name] = valueToType;
    }
    applyRouterSettings(settings: IrouterSettings) {
        let prop: string;
        for (prop in settings) {
            this.routerSettings[prop] = settings[prop];
        }
        if (settings['useChannelLimit'] === false || !settings.hasOwnProperty('useChannelLimit')) {
            this.routerSettings['channelLimit'] = [];
        }
    }
    changeExtendedChannel(routerSettings) {
        let extendedChannelList: string[];
        const channelBonding = routerSettings.channelBonding;
        const extendedChannel = routerSettings.extendedChannel;
        if (channelBonding === '5' || channelBonding === '10') {
            extendedChannelList = extendedChannelConfig.channelBonding5;
        }
        if (channelBonding === '20') {
            if (extendedChannel) {
                extendedChannelList = extendedChannelConfig.channelBonding20.extendedIsTrue;
            } else {
                extendedChannelList = extendedChannelConfig.channelBonding20.extendedIsFalse;
            }
        }
        if (channelBonding === '40') {
            if (extendedChannel) {
                extendedChannelList = extendedChannelConfig.channelBonding40.extendedIsTrue;
            } else {
                extendedChannelList = extendedChannelConfig.channelBonding40.extendedIsFalse;
            }
        }
        if (channelBonding === '80') {
            if (extendedChannel) {
                extendedChannelList = extendedChannelConfig.channelBonding80.extendedIsTrue;
            } else {
                extendedChannelList = extendedChannelConfig.channelBonding80.extendedIsFalse;
            }
        }
        routerSettings.channelLimit = extendedChannelList;
    }
}
