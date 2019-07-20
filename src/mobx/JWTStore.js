import { observable } from 'mobx';

class JWTStore {
  @observable jwt = '';

  addJWT(jwt) {
    this.jwt = jwt;
  }

  removeJWT() {
    this.jwt = '';
  }

  isAvailable() {
    return this.jwt !== '';
  }
}

export default new JWTStore();