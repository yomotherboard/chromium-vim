const q = new URLSearchParams(window.location.search);

function render() {
    const target = document.querySelector('#url');
    console.log(target);
    target.innerHTML = `${q.get('sleep-url')}`;
}

function awaken() {
    window.location.href = q.get('sleep-url');
}

window.addEventListener('load', render);
window.addEventListener('keydown', awaken);
