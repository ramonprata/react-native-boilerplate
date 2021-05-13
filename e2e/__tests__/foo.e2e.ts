describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should render foo screen', async () => {
    await expect(element(by.id('fooScreen'))).toBeVisible();
  });
});
