// JavaScript source code
var items = document.querySelectorAll('li.hot');

if (items.length > 0) {
    for (var i = 0; i < items.length; i++) {
        if (i % 2 == 0) {
            items[i].className = 'cool';
        }
    }
}
