import ReqResStatusError from '../../constants/ReqResStatusError';

abstract class BaseManager {
  protected readonly errorDictionary: typeof ReqResStatusError;

  constructor(_errorDictionary?: typeof ReqResStatusError) {
    this.errorDictionary = _errorDictionary || ReqResStatusError;
  }

  handleError(error: any, messageDetail?: string) {
    if (error.status) {
      return Promise.reject(this.getErrorMessage(error.status, messageDetail));
    } else {
      return Promise.reject(this.errorDictionary.UNKNOWN_ERROR);
    }
  }

  getErrorMessage(status: string, messageDetail?: string) {
    const errorStatus = Object.values(this.errorDictionary).find((e) => e.status === status);
    const errorReturn = errorStatus || this.errorDictionary.UNKNOWN_ERROR;
    return { ...errorReturn, details: messageDetail || errorStatus?.details };
  }
}

export default BaseManager;
