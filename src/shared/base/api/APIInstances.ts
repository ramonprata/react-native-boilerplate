class Singleton {
  private static instance: Singleton;

  constructor() {
    if (Singleton.instance instanceof Singleton) {
      return Singleton.instance;
    }

    Singleton.instance = this;
  }
}
export { Singleton };
