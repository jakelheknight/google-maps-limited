import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `google-maps-limited`
 * A limited use case of google maps with clickable markers.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class GoogleMapsLimited extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'google-maps-limited',
      },
    };
  }
}

window.customElements.define('google-maps-limited', GoogleMapsLimited);
