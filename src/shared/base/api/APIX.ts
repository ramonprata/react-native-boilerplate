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
    return {
      baseURL: Config.APIX_BASE_URL,
      // set other properties headers, timeout, auth..
    };
  }
}

export default APIX;
