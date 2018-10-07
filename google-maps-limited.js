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
  
  static get properties() {
    return {
      apiKey: {type: String},
      lang: {
        type: String,
        value: "en"
      },
      inChina: {
        type: Boolean,
        value: false
      }
    };
  }
  render() {
    return html`
      <style>
        :host {
          display: block
        }
        #map {
          width: 100%;
          height: 200px;
        }
      </style>
      <div id="map"></div>
    `;
  }

  constructor() {
    super();
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

  _mapScriptTag() {
    const lang = 'en'
    // init google maps
    const googleMapsLoader = document.createElement('script');
    googleMapsLoader.src = `https://maps.${this.inChina ? 'google.cn' : 'googleapis.com'}/maps/api/js?key=${this.apiKey}&language=${lang === 'zh' ? 'zh-TW' : lang}&callback=initMap`;
    googleMapsLoader.async = true;
    googleMapsLoader.defer = true;
    return googleMapsLoader;
  }

}

window.customElements.define('google-maps-limited', GoogleMapsLimited);
