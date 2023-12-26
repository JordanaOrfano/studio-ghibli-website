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

// Search
function liveSearch() {
	let card = document.querySelectorAll('.card');
	let search_query = document.getElementById('searchbox').value;
	for (let i = 0; i < card.length; i++) {
		if (card[i].innerText.toLowerCase().includes(search_query.toLowerCase())) {
			card[i].classList.remove('is-hidden');
		} else {
			card[i].classList.add('is-hidden');
		}
	}
}

// Search delay
let typingTimer;
let typeInterval = 500;
let searchInput = document.getElementById('searchbox');

searchInput.addEventListener('keyup', () => {
	clearTimeout(typingTimer);
	typingTimer = setTimeout(liveSearch, typeInterval);
});
