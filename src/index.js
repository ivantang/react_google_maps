import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleApiWrapper} from 'google-maps-react';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// ReactDom.render(<GoogleApiComponent/>, document.getElementById('root'));

export {wrapper as GoogleApiWrapper} from './GoogleApiComponent';

export class Container extends React.Component {
	render() {
		const style = {
			width: '100vw',
			height: '100vh'
		};
		if (!this.props.loaded) {
			return <div>Loading...</div>;
		}
		return (
      <div style={style}>
        <Map google ={this.props.google}/>
      </div>
		);
	}
}

export class Map extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.google !== this.props.google) {
			this.loadMap();
		}
	}

	loadMap() {
		if (this.props && this.props.google) {
      // Google is available
      // extract object
			const {google} = this.props;
			const maps = google.maps;

      // Need to grab reference to DOM component where we want map to be placed
			const mapRef = this.refs.map;
			const node = ReactDOM.findDomNode(mapRef);

      // Instantiate googlemap Object, api below
      // https://developers.google.com/maps/documentation/javascript/?hl=en_US
			const zoom = 14;
			const lat = 37.774929;
			const lng = -122.419416;
			const center = new maps.LatLng(lat, lng);
			const mapConfig = Object.assign({}, {
				center,
				zoom
			});
      // Maps.Map() constructor acceps DOM node and config object to create map
			this.map = new maps.Map(node, mapConfig);
		}
	}

	render() {
		return (
      <div ref="map">
        Loading map...
      </div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCV1LnHwZpz212WptE71SSlykHW1Sm3ksM'
})(Container);
