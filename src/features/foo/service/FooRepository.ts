/**
 * Use this to interact with APIs and/or Local DB
 */

import APIX from '../../../shared/base/api/APIX';
import { IPost } from '../../../shared/types';

class FooRepository {
  public apiX;

  constructor() {
    this.apiX = new APIX();
  }

  async getFooData() {
    return this.apiX.instance.get<IPost[]>('/posts?_limit=1');
  }
}

export default FooRepository;
