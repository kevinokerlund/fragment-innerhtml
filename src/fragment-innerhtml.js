import fragment from 'html-fragment';

Object.defineProperty(DocumentFragment.prototype, "innerHTML", {
	get: function () {
		var clone = this.cloneNode(true);
		var div = document.createElement('div');
		div.appendChild(clone);
		return div.innerHTML;
	},
	set: function (html) {
		while (this.firstChild) {
			this.removeChild(this.firstChild);
		}
		this.appendChild(fragment(html));
	}
});
