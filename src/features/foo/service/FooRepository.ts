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

  getFooData() {
    return this.apiX.instance.get<IPost[]>('/posts');
  }
}

export default FooRepository;
