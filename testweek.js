//function theWeek(date) {
//    var totalDays = 0;
//    var now =new Date(date);
//    var years = now.getYear()
//    if (years < 1000)
//        years += 1900
//    var days = new Array(12);
//    days[0] = 31;
//    days[2] = 31;
//    days[3] = 30;
//    days[4] = 31;
//    days[5] = 30;
//    days[6] = 31;
//    days[7] = 31;
//    days[8] = 30;
//    days[9] = 31;
//    days[10] = 30;
//    days[11] = 31;
//    //判断是否为闰年，针对2月的天数进行计算
//    if (Math.round(now.getYear() / 4) == now.getYear() / 4) {
//        days[1] = 29
//    } else {
//        days[1] = 28
//    }
//
//    if (now.getMonth() == 0) {
//        totalDays = totalDays + now.getDate();
//    } else {
//        var curMonth = now.getMonth();
//        for (var count = 1; count <= curMonth; count++) {
//            totalDays = totalDays + days[count - 1];
//        }
//        totalDays = totalDays + now.getDate();
//    }
//    //得到第几周
//    var week = Math.ceil(totalDays / 7);
//    return week;
//}
//console.log(theWeek("2017,3,20"));


//每年一月一号所在周为当年第一周，
function week(year,month,day){
var year = parseInt(year);
var month = parseInt(month);
var day = parseInt(day);
var days = 0;  //表示该日期为当年的第几天
//根据月累加天数 计算当前日期为年的第几天
for(var i = 1; i < month; i++ ){
    switch(i){
        //大月的情况加31
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:{
            days += 31;
            break;
        }
        //小月的情况加30
        case 4:
        case 6:
        case 9:
        case 11:{
            days += 30;
            break;
        }
        //二月的情况，闰年+29  平年28
        case 2:{
            if((year%4==0 && year%100!=0)||(year%100==0 && year%400==0)){
                days += 29; //闰年加29
            }
            else {
                days += 28;
            }
            break;
        }
    }
}
day = day * 1;
days += day;
var date0 = new Date(year,0,1);   //当年的第一当年
var oneDayWeek = date0.getDay()==0?7:date0.getDay();//当年的第一天是周几
//每年第一个周按1月1号所在周计算   计算第一个周有几天
var oneWeekDay = 7-oneDayWeek+1;
//除去第一周剩下的天数；
var shengdays = days - oneWeekDay;
var nthOfWeek = Math.ceil(shengdays/7)+1;  //向上取整
if(nthOfWeek>53){//最大按照53算 2012 31 有54  也是按照最后一个周计算
    nthOfWeek = 53;
}
return nthOfWeek;
}
console.log(week(2017,3,13));

//---------------------------------------------------------------------
   	//var getWeeks = function(year, mouth, day) {
   //     var day1 = new Date(year, mouth-1, day);
   //     var day2 = new Date(year, 0, 1);
   //
   //     var firstweek = day2.getDay();//1月1日是星期几
   //     if(firstweek == 0) {
   //         firstweek = 6;
   //     }else {
   //         firstweek = firstweek - 1;
   //     }//转化为0表示星期一,6表示星期日
   //     firstweek = (7 - firstweek) % 7;//计算1月1日离第一周的天数
   //     var day3 = new Date(year, 0, 1+firstweek)
   //     var result = Math.round((day1.getTime() - day3.getTime())/(1000*60*60*24));
   //     result = Math.floor(result / 7)+1;//这个地方应该用floor返回最小次数然后+1
   //     return result;
   // };
   //console.log((getWeeks(2016, 12, 31)));
