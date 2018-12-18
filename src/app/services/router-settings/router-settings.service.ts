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
      return  Object.assign({}, this.routerSettings);
  }
  changeRawSettings(name: string, value: any) {
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
  applyUserSettings(settings: IrouterSettings) {
      let prop: string;
      for (prop in settings) {
          this.routerSettings[prop] = settings[prop];
      }
  }
}
