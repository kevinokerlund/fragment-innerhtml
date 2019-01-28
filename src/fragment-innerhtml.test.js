// require('../dist/fragment-innerhtml');

test('DocumentFragment should exist', () => {
	const fragment = document.createDocumentFragment();
	expect(fragment).toBeDefined();
});

test('should set innerHTML of a fragment', () => {
	const html = '<div>Testing</div>';
	const fragment = document.createDocumentFragment();

	fragment.innerHTML = html;

	expect(fragment.children.length).toBe(1);
	expect(fragment.children[0].nodeName).toBe('DIV');
});

test('should get innerHTML of a fragment', () => {
	const html = '<div>Testing</div>';
	const fragment = document.createDocumentFragment();

	fragment.innerHTML = html;
	expect(fragment.innerHTML).toBe(html);
});

test('should support multiple innerHTML settings', () => {
	const html1 = '<div>Testing 1</div>';
	const html2 = '<div>Testing 2</div>';
	const fragment = document.createDocumentFragment();

	fragment.innerHTML = html1;
	expect(fragment.innerHTML).toBe(html1);

	fragment.innerHTML = html2;
	expect(fragment.innerHTML).toBe(html2);
});
