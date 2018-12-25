import { extendedChannelConfig } from '../../shared/channeslConfig';

import { IrouterSettings } from '../../interfaces';

const initialSettings: IrouterSettings = {
    ssid: null,
    channelBonding: null,
    wpaKey: null,
    extendedChannel: null,
    useChannelLimit: null,
    channelLimit: [],
    channelLimitSelect: []
};

export class RouterSettingsService {
    constructor() { }
    routerSettings: IrouterSettings = {
        ...initialSettings
    };
    getRouterSettings(): IrouterSettings {
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
                valueToType = value.split(' ');
                break;
            }
            default: {
                valueToType = value;
            }
        }
        this.routerSettings[name] = valueToType;
    }
    applyRouterSettings(settings: IrouterSettings) {
        this.routerSettings = {...settings};
        const isUseChannelLimit = settings['useChannelLimit'];
        const isExtendedChannel = settings['extendedChannel'];
        if (!isUseChannelLimit) {
            this.routerSettings['channelLimit'] = [];
        }
        if (isExtendedChannel === null) {
            this.routerSettings['extendedChannel'] = false;
        }
        if (isUseChannelLimit === null) {
            this.routerSettings['useChannelLimit'] = false;
        }
    }
    changeExtendedChannel(routerSettings: IrouterSettings) {
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
        routerSettings.channelLimitSelect = [];
    }
}
