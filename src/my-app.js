import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import { Element as PolymerElement, html } from '@polymer/polymer/polymer-element';
import './input-field';

export default class MyApp extends PolymerElement {
  constructor() {
    super();
    this.name = 'TestName';
  }

  static get template() {
    return html
      `
      <div>This is my [[name]] app</div>
      <input-field />
      `
    ;
  }

  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define('my-app', MyApp);
