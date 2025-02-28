function updateChinaTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const chinaTime = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
    document.getElementById('china-time').textContent = chinaTime;
}

setInterval(updateChinaTime, 1000);
updateChinaTime();