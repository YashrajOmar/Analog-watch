setInterval(() => {
    d=new Date()
    m=d.getMinutes();
    h=d.getHours();
    s=d.getSeconds();

    hrot=30*h+m/2;
    mr=m*6;
    sr=s*6;

    Hour.style.transform = `rotate(${hrot}deg)`;
    Minute.style.transform = `rotate(${mr}deg)`;
    Second.style.transform = `rotate(${sr}deg)`;
},1000);