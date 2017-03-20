/**
 * Created by Administrator on 2017/3/15 0015.
 */
function isToday(str){
    var d = new Date(str.replace(/-/g,"/"));
    var todaysDate = new Date();
    if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
        return true;
    } else {
        return false;
    }
}

console.log(isToday('2017-3-15'));
console.log(isToday('2017/3/15'));
console.log(isToday('2017-03-15'));
console.log(isToday('2017/03/15'));
console.log(isToday('2017-3-14'));
console.log(isToday('2017/3/14'));
console.log(isToday('2017-03-14'));
console.log(isToday('2017/03/14'));