function timeConversion(s){

    // recebe apenas o periodo
    let period = s.substring(8)
    //recebe apenas o horário
    let time = s.substring(0, 8)
    //divide o horário em um array
    let [hour, minute, second] = time.split(':')
  
    let hoursInt = parseInt(hour);
    let convertedHours = period === "AM" ? hoursInt : hoursInt + 12;
    let answer;
    if(period === "AM" && convertedHours === 12){
      answer = `00:${minute}:${second}`
    } else if(period === "PM" && convertedHours === 24){
      answer = `${hour}:${minute}:${second}`
    } else{
      answer = `${convertedHours}:${minute}:${second}`
    }
    return answer;
  }