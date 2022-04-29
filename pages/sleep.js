const q = new URLSearchParams(window.location.search);

function render() {
    const url = document.querySelector('#url');
    url.innerHTML = `${q.get('sleep-url')}`;
    const icon = document.querySelector('#icon');
	const icon_url = `${q.get('icon-url')}`;
	//const icon_url = document.querySelector('head > link[rel=image_src]').href;
	//const icon_url = `${q.get('sleep-url')}`.replace(/[^/]+$/, 'favicon.png');
	const icon_style = 'display: block; margin: auto;';
    icon.innerHTML = `<img src='${icon_url}' style='${icon_style}'>`;
}

function awaken(key) {
    if (key.code == 'Space') {
        window.location.href = q.get('sleep-url');
    }
}

window.addEventListener('load', render);
document.addEventListener('keydown', awaken);
