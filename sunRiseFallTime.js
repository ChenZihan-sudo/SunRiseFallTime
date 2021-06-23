var request = new XMLHttpRequest();
request.open('GET', 'https://ip.seeip.org/geoip');
request.send();
request.onreadystatechange = function() {
    var json = request.responseText;
    var obj = eval('(' + json + ')');
    // 经度
    var longitude = obj.longitude;
    //纬度
    var latitude = obj.latitude;


    //时区计算
    getZoneCode = longitude / 15
    var zoneCodeB = -12.5
    var zoneCodeE = -11.5
    for (var i = 0; i < 36; i++) {
        zoneCodeB++;
        zoneCodeE++;
        if (getZoneCode < zoneCodeB && getZoneCode < zoneCodeE) {
            zoneCodeB--;
            zoneCodeE--;
            break;
        }
    }
    //正午时间计算
    zoneCode = zoneCodeB + 0.5;
    zonelongitude = zoneCode * 15;
    offsetLongitude = zonelongitude - longitude;
    offsetTime = offsetLongitude / 15;
    TimeOfNoonHour = 12 + offsetTime;

    //太阳入射角a
    var _date = new Date().getDate();
    var _month = new Date().getMonth() + 1;
    timeCode = _month + (_date / 30.4166) //可通过该月份具体天数提高精度
    console.log(_date, _month, timeCode)
        //春分
    springCode = 3.7333333333333334 //可通过具体四时令时间提高精度
        //夏至
    summerCode = 6.733333333333333
        //秋分
    autumnCode = 9.733333333333333
        //冬至
    winterCode = 12.733333333333333



    var α = null;
    var sunMaxDeg = 23.45; //可通过具体最大太阳入射角提高精度
    //通过sin函数提高精度
    if (springCode < timeCode && timeCode < summerCode) {
        ratio = (timeCode - springCode) / (summerCode - springCode)
        α = ratio * sunMaxDeg
        console.log("春-夏", α)
    } else if (summerCode < timeCode && timeCode < autumnCode) {
        ratio = (timeCode - summerCode) / (autumnCode - summerCode)
        α = sunMaxDeg - (ratio * sunMaxDeg)
        console.log("夏-秋", α)
    } else if (autumnCode < timeCode && timeCode < winterCode) {
        ratio = (timeCode - autumnCode) / (winterCode - autumnCode)
        α = -(ratio * sunMaxDeg)
        console.log("秋-冬", α)
    } else if (timeCode < springCode || timeCode > winterCode) {
        if (timeCode > winterCode) {
            ratio = (timeCode - winterCode) / ((13 - winterCode) + (springCode - 1))
        } else if (timeCode < springCode) {
            ratio = ((timeCode - 1) + (13 - winterCode)) / ((13 - winterCode) + (springCode - 1))
        }
        α = -(sunMaxDeg - (ratio * sunMaxDeg))
        console.log("冬-春", α)
    } else if (timeCode == springCode) {
        α = 0;
        console.log("春分", α)
    } else if (timeCode == summerCode) {
        α = sunMaxDeg;
        console.log("夏至", α)
    } else if (timeCode == autumnCode) {
        α = 0;
        console.log("秋分", α)
    } else if (timeCode == winterCode) {
        α = sunMaxDeg;
        console.log("冬至", α)
    }
}