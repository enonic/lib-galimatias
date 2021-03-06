const BEAN = __.newBean('com.enonic.galimatias.URL');


export class URL {
  static parse = (input) => BEAN.parse(input).toString()

  static normalize = (input) => BEAN.normalize(BEAN.parse(input)).toString()

  static resolve = (base, path) => BEAN.parse(base).resolve(path).toString()

  constructor(input) {
    this._javaObj = BEAN.parse(input);
  }

  // Makes it possible to reuse a constant instance reference
  fromString(input) {
    this._javaObj = BEAN.parse(input);
    return this; // Chainable
  }

  getFragment = () => this._javaObj.fragment() || ''

  getHost = () => this._javaObj.host().toString()

  getScheme = () => this._javaObj.scheme().toString()

  normalize = (input) => BEAN.normalize(this._javaObj).toString()

  resolve = (path) => this._javaObj.resolve(path).toString()

  setFragment(fragment = '') {
    if (fragment === '') {
      this._javaObj = BEAN.parse(this.toString().replace(/#.*/, ''));
    } else {
      this._javaObj = this._javaObj.withFragment(fragment);
    }
    return this; // Chainable
  }

  setHost(host = '') {
    this._javaObj = this._javaObj.withHost(host);
    return this; // Chainable
  }

  setScheme(scheme = '') {
    this._javaObj = this._javaObj.withScheme(scheme);
    return this; // Chainable
  }

  toString = () => this._javaObj.toString()

} // class URL


export const parse = URL.parse;

export const normalize = URL.normalize;

export const resolve = URL.resolve;
