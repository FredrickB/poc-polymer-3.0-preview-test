import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';

export default class InputField extends PolymerElement {
  constructor() {
    super();
  }

  test(e) {
    console.log('e', e);
    console.log('e.target.value', e.target.value);
  }

  static get template() {
    return html`<input type='text' on-change='test'>`;
  }
}

customElements.define('input-field', InputField);
