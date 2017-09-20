/* generated by Svelte vX.Y.Z */
import { addListener, assign, createElement, detachNode, init, insert, proto, removeListener } from "svelte/shared.js";

function create_main_fragment(state, component) {
	var input;

	function input_change_handler() {
		component.set({ foo: input.checked });
	}

	return {
		c: function create() {
			input = createElement("input");
			this.h();
		},

		h: function hydrate() {
			input.type = "checkbox";
			addListener(input, "change", input_change_handler);
		},

		m: function mount(target, anchor) {
			input.checked = state.foo;

			insert(target, anchor, input);
		},

		p: function update(changed, state) {
			input.checked = state.foo;
		},

		u: function unmount() {
			detachNode(input);
		},

		d: function destroy() {
			removeListener(input, "change", input_change_handler);
		}
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