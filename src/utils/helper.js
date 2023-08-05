function compareTime(dateTime1,dateTime2){
    let time_1=new Date(dateTime1);
    let time_2=new Date(dateTime2);

    return time_1.getTime()>time_2.getTime();
}

module.exports={
    compareTime
}