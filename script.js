// Scroll to top button
function scrollToTop() {
	window.scrollTo(0, 0);
}

// Copyright
let date = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML = date;

// Tooltips
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl);
});
