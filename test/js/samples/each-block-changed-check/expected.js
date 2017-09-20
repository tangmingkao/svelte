/* generated by Svelte vX.Y.Z */
import { append, appendAll, assign, createElement, createText, destroyEach, detachAfter, detachNode, init, insert, insertAll, noop, proto } from "svelte/shared.js";

function create_main_fragment(state, component) {
	var text, p, text_1;

	var comments = state.comments;

	var each_blocks = [];

	for (var i = 0; i < comments.length; i += 1) {
		each_blocks[i] = create_each_block(state, comments, comments[i], i, component);
	}

	return {
		c: function create() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			text = createText("\n\n");
			p = createElement("p");
			text_1 = createText(state.foo);
		},

		m: function mount(target, anchor) {
			append(p, text_1);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insertAll(target, anchor, [text, p]);
		},

		p: function update(changed, state) {
			var comments = state.comments;

			if (changed.comments || changed.elapsed || changed.time) {
				for (var i = 0; i < comments.length; i += 1) {
					if (each_blocks[i]) {
						each_blocks[i].p(changed, state, comments, comments[i], i);
					} else {
						each_blocks[i] = create_each_block(state, comments, comments[i], i, component);
						each_blocks[i].c();
						each_blocks[i].m(text.parentNode, text);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].u();
					each_blocks[i].d();
				}
				each_blocks.length = comments.length;
			}

			if (changed.foo) {
				text_1.data = state.foo;
			}
		},

		u: function unmount() {
			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].u();
			}

			detachNode(text);
			detachNode(p);
		},

		d: function destroy() {
			destroyEach(each_blocks);
		}
	};
}

// (1:0) {{#each comments as comment, i}}
function create_each_block(state, comments, comment, i, component) {
	var div, strong, text, text_1, span, text_2_value = comment.author, text_2, text_3, text_4_value = state.elapsed(comment.time, state.time), text_4, text_5, text_6, raw_value = comment.html, raw_before;

	return {
		c: function create() {
			div = createElement("div");
			strong = createElement("strong");
			text = createText(i);
			text_1 = createText("\n\n\t\t");
			span = createElement("span");
			text_2 = createText(text_2_value);
			text_3 = createText(" wrote ");
			text_4 = createText(text_4_value);
			text_5 = createText(" ago:");
			text_6 = createText("\n\n\t\t");
			raw_before = createElement('noscript');
			this.h();
		},

		h: function hydrate() {
			div.className = "comment";
			span.className = "meta";
		},

		m: function mount(target, anchor) {
			append(strong, text);

			appendAll(span, [text_2, text_3, text_4, text_5]);

			appendAll(div, [strong, text_1, span, text_6]);

			append(div, raw_before);
			raw_before.insertAdjacentHTML("afterend", raw_value);

			insert(target, anchor, div);
		},

		p: function update(changed, state, comments, comment, i) {
			if ((changed.comments) && text_2_value !== (text_2_value = comment.author)) {
				text_2.data = text_2_value;
			}

			if ((changed.elapsed || changed.comments || changed.time) && text_4_value !== (text_4_value = state.elapsed(comment.time, state.time))) {
				text_4.data = text_4_value;
			}

			if ((changed.comments) && raw_value !== (raw_value = comment.html)) {
				detachAfter(raw_before);
				raw_before.insertAdjacentHTML("afterend", raw_value);
			}
		},

		u: function unmount() {
			detachAfter(raw_before);

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