

(function (factory, window) {

	if (typeof define === 'function' && define.amd) {

		define(['leaflet'], factory);

	} else if (typeof exports === 'object') {

		if (typeof window !== 'undefined' && window.L) {
			module.exports = factory(L);
		} else {
			module.exports = factory(require('leaflet'));
		}

	}
	if(typeof window !== 'undefined' && window.L){

		window.L.Locate = factory(L);

	}

} (function (L) {


	L.Control.Button = L.Control.extend({

		options: {
			position: 'topleft',
			icon: 'fa fa-map-marker',
			func: function(){}
		},
		onAdd: function () {
	        var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

	        this._link = L.DomUtil.create('a', 'leaflet-bar-part', container);
	        this._link.href = '#';
	        this._link.title = this.options.title;
            this._icon = L.DomUtil.create('span', this.options.icon, this._link);

	        L.DomEvent
                .on(this._link, 'click', L.DomEvent.stopPropagation)
                .on(this._link, 'click', L.DomEvent.preventDefault)
                .on(this._link, 'click', function() {
                    this.options.func();
                }, this)
                .on(this._link, 'dblclick', L.DomEvent.stopPropagation);

	        return container;
	    }

	});

	 L.control.button = function (options) {
		return new L.Control.Button(options);
	};

	return L.Control.Button;

}, window));