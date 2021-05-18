/**
 * Use this to apply business rules on data input/output
 */
import BaseManager from '../../../shared/base/api/BaseManager';
import FooRepository from './FooRepository';

export class FooManager extends BaseManager {
  static async getMydata(showFoo: boolean): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(showFoo);
      }, 2000);
    });
  }

  public async getFooData() {
    try {
      const repo = new FooRepository();
      return await repo.getFooData();
    } catch (error) {
      return this.handleError(error);
    }
  }
}
