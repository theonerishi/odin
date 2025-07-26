const p = document.createElement('p');
document.body.appendChild(p);
for (let i = 10; i >= 0; i--) {
    if (i == 0) {
        p.innerText += 'Blast off!';
    } else if (i == 10) {
        p.innerText += 'Countdown 10 \n';
    } else {
        p.innerText += i + '\n';
    }
}