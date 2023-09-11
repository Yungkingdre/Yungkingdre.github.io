let d = new Date();
let dy = d.getDay();
switch (dy) {
    case 1:
        $(".cdow").html("Monday");
        break;
    case 2:
        $(".cdow").html("Tuesday");
        break;
    case 3:
        $(".cdow").html("Wednesday");
        break;
    case 4:
        $(".cdow").html("Thursday");
        break;
    case 5:
        $(".cdow").html("Friday");
        break;
    case 6:
        $(".cdow").html("Saturday");
        break;
    default:
            $(".cdow").html("Sunday");
            break;
};
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var milli = d.getMilliseconds();
    $(".ctod").html(hours+":"+mins+":"+secs+":"+milli);
}
setInterval(printTime, 1000);