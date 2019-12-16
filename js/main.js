var link = document.querySelector('.login-link');
var modal = document.querySelector('.modal-login');
var close = document.querySelector('.modal-close');
var form = modal.querySelector('form');
var login = form.querySelector('[name=login]');
var password = form.querySelector('[name=password]');
var storage = localStorage.getItem('login');

var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('login');
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	modal.classList.add('modal-show');
	if (storage) {
		login.value = storage;
	}
	if (storage) {
		password.focus();
	} else {
		login.focus();
	}
});

close.addEventListener('click', function (evt) {
	evt.preventDefault();
	modal.classList.remove('modal-show');
	modal.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		modal.classList.remove('modal-error');
		modal.offsetWidth = modal.offsetWidth;
		modal.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('login', login.value);
		}
	}
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		
		if (modal.classList.contains('modal-show')) {
			evt.preventDefault();
			modal.classList.remove('modal-show');
			modal.classList.remove('modal-error');
		}
	}
});