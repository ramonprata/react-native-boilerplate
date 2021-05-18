import { AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';
import BaseAPI from './BaseAPI';

class APIX extends BaseAPI {
  private static instance?: APIX;

  constructor() {
    const instanceConfig = APIX.getAPIXConfig();
    super(instanceConfig);
    if (APIX.instance instanceof APIX) {
      return APIX.instance;
    }
    return (APIX.instance = this);
  }

  static getAPIXConfig(): AxiosRequestConfig {
    // set other properties headers, timeout, auth..
    return {
      baseURL: Config.APIX_BASE_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };
  }
}

export default APIX;
