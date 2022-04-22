const q = new URLSearchParams(window.location.search);

function render() {
    const target = document.querySelector('#url');
    console.log(target);
    target.innerHTML = `${q.get('sleep-url')}`;
}

function awaken(key) {
    if (key.code == 'Space') {
        window.location.href = q.get('sleep-url');
    }
}

window.addEventListener('load', render);
document.addEventListener('keydown', awaken);
