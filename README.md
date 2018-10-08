# google-maps-limited

A limited use case of google maps with clickable markers. Great for your basic use case, should be got do go every where lit element is served.

## Using google-maps-limited
### Before you start

You will be needing your own api key from google. Since this key is passed as a parameter on the url you can't hid it so make sure you restrict it according to your use case.
You can set up your own api key at [Googles Developer Console](https://console.developers.google.com/apis/).

### Getting the element on the page
#### installing
This component is in the npm registry so you can just.
```bash
npm i google-maps-limited
```
in you project directory.
#### using
This lit element is written as a module so you can use the following.

```html
<script type="module" src="../google-maps-limited.js"></script>
```
or
```javascript
import "google-maps-limited/google-maps-limited.js";
```
Into your project then call it and pass your key to the apiKey property.

```JSON
properties:
apiKey: API_KEY, // Your google maps api key
markers:  // an array of objects that represent map markers. Setter so must be assigned to work properly
  [{
    position: {lat: Your lat, lgn: Your long},
    icon: icon to overRide default,
    selectedIcon: icon to overRide selectedIcon Default,
    infoWindowContent: HTML string of content to pop up in info window win clicked.
  }],
icon: DEFAULT_ICON, // We set one but if you dont like it change it.
selectedIcon: DEFAULT_SELECTED_ICON, // We set one but if you dont like it change it.
selectedMarkerId: INDEX_OF_SELECTED_ICON // We set this to change selected icon externally. Setter so must be assigned to work properly.
// Fires 'map-pin-selected' event when selected Marker is changed.
```

## Contributing

### Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally. Right now the api key is hard coded for the demo. A pr is forth coming where you will have to enter it in some way. For now please be kind with your demo usage.

### Viewing Your changes

```
$ polymer serve
```

### Running Tests

```
$ polymer test
```

