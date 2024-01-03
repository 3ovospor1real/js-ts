
let s = '06:40:03AM';

function timeConversion(s) {

    let period = s.substring(8);
    let time = s.substring(0, 8);
    let [hour, minute, second] = time.split(':');

    let convertedHours = period == 'PM' ? parseInt(hour) + 12 : parseInt(hour)

    let resposta

    if(period == 'AM' & convertedHours == 12) {
        resposta = `00:${minute}:${second}`
    } else if(period == 'PM' & convertedHours == 24) {
        resposta = `12:${minute}:${second}`
    } else {
        resposta = `${hours}:${minute}:${second}`
    }

    console.log(resposta);

}

timeConversion(s)


