	if ('serviceWorker' in navigator) {
		window.addEventListener('load', () => {
			navigator.serviceWorker
				.register('../../sw_cached_site.js')
				.then(reg => console.log('Service Worker: registered'))
				.catch(err => console.log('Service Worker: Error: ${err}'));
		})
	}