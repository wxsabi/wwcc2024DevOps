function writeDate() {
    const today = new Date();
    const formatter = new Intl.DateTimeFormat('en-us', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    const dateEl = document.getElementById('date');
    dateEl.textContent = formatter.format(today);
}

writeDate();

var refreshEl = document.getElementById('refreshBtn');
refreshEl.addEventListener('click', writeDate);