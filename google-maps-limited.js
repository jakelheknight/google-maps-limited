import {html, LitElement} from '@polymer/lit-element';
window.initMap = function () { window.dispatchEvent(new CustomEvent('google-map-ready')); }; // eslint-disable-line no-unused-vars

/**
 * `google-maps-limited`
 * A limited use case of google maps with clickable markers.
 *
 * @customElement
 * @demo demo/index.html
 */
class GoogleMapsLimited extends LitElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block
        }
        #map {
          width: 100%;
        }
      </style>
      <div id="map"></div>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>
      <script>
      </script>
    `;
  }

  static get properties() {
    return {
    };
  }

  ready() {
    super.ready();
    // _mapScriptTag sets up and the google maps loader script tag - we inject it here
    // and after it loads it will fire the google-map-ready event
    this.shadowRoot.appendChild(this._mapScriptTag());
    window.addEventListener('google-map-ready', () => {
      this._mapRef = new google.maps.Map(this.shadowRoot.querySelector('#map'), {
        center: { lat: 40, lng: -112 },
        zoom: 5,
        streetViewControl: false,
      });
    });
  }

}

window.customElements.define('google-maps-limited', GoogleMapsLimited);
