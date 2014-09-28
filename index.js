var message = {
	"МакSим": true
};
if (window.parent) {
	window.parent.postMessage(message, '*');
}
