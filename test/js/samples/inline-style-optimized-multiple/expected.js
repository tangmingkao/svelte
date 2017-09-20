/* generated by Svelte vX.Y.Z */
import { assign, createElement, detachNode, init, insert, noop, proto, setStyle } from "svelte/shared.js";

function create_main_fragment(state, component) {
	var div;

	return {
		c: function create() {
			div = createElement("div");
			this.h();
		},

		h: function hydrate() {
			setStyle(div, "color", state.color);
			setStyle(div, "transform", "translate(" + state.x + "px," + state.y + "px)");
		},

		m: function mount(target, anchor) {
			insert(target, anchor, div);
		},

		p: function update(changed, state) {
			if (changed.color) {
				setStyle(div, "color", state.color);
			}

			if (changed.x || changed.y) {
				setStyle(div, "transform", "translate(" + state.x + "px," + state.y + "px)");
			}
		},

		u: function unmount() {
			detachNode(div);
		},

		d: noop
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = options.data || {};

	this._fragment = create_main_fragment(this._state, this);

	if (options.target) {
		this._fragment.c();
		this._fragment.m(options.target, options.anchor || null);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;