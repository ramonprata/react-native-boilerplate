/**
 * Use this to apply business rules on data input/output
 */
export class FooManager {
  async getMydata(showFoo: boolean): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(showFoo);
      }, 2000);
    });
  }
}
