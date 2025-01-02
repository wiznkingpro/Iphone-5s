const displayBlock = document.getElementById('displayBlock');
const displayActive = document.getElementById('displayActive');
const displayDark = document.getElementById('displayDark');
const lockTime = document.getElementById('lockTime');
const activeTime = document.getElementById('activeTime');
const batteryLevel = document.getElementById('batteryLevel');
const apps = document.querySelectorAll('.app_window');
let isScreenOn = false;
let battery = 100;

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    lockTime.textContent = `${hours}:${minutes}`;
    activeTime.textContent = `${hours}:${minutes}`;
}

function toggleScreen() {
    if (!isScreenOn && battery > 0) {
        isScreenOn = true;
        displayDark.style.opacity = '0';
        setTimeout(() => {
            displayDark.style.display = 'none';
            displayBlock.style.display = 'flex';
            displayBlock.style.opacity = '1';
            updateTime();
        }, 300);
    } else if (isScreenOn) {
        isScreenOn = false;
        closeAllApps();
        displayBlock.style.opacity = '0';
        displayActive.style.opacity = '0';
        setTimeout(() => {
            displayBlock.style.display = 'none';
            displayActive.style.display = 'none';
            displayDark.style.display = 'block';
            displayDark.style.opacity = '1';
        }, 300);
    }
}

function goToHome() {
    if (isScreenOn) {
        closeAllApps();
        displayActive.style.display = 'block';
        displayActive.style.opacity = '1';
    }
}

function openApp(index) {
    closeAllApps();
    apps[index].style.display = 'block';
    setTimeout(() => {
        apps[index].style.opacity = '1';
    }, 10);
}

function closeAllApps() {
    apps.forEach(app => {
        app.style.opacity = '0';
        setTimeout(() => {
            app.style.display = 'none';
        }, 300);
    });
}

// Обновляем время каждые 60 секунд
setInterval(updateTime, 60000);