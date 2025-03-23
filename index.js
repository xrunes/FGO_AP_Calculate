function updateTime() {
    const now = new Date();
    document.getElementById("local_time").innerText = `当前时间是 ${now.toLocaleString()}`;
    setInterval(updateTime, 1000);
}
updateTime();

function save() {
    const now = new Date();
    const AP = document.getElementById("AP").value;
    if (AP >=1 && AP <= 146) {
        const need_time = (146 - AP) * 5;
        const need_hour = Math.trunc(need_time / 60);
        const need_minute = need_time % 60;
        document.getElementById("p2").innerText = `完全恢复体力需要大约 ${need_hour} 小时 ${need_minute} 分钟`;
        document.getElementById("p3").innerText = `大约在 ${new Date(need_time * 60 * 1000 + now.getTime()).toLocaleString()} 恢复满体力`;
        document.getElementById("tips").style.display = "block";
    }
    else {
        alert("输入有误，体力范围需在1-146之间且纯数字，请重新输入");
    }
}