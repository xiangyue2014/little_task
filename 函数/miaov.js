function $(v) {
    if(typeof v==='function'){
        window.onload = v;
    }else if(typeof v==='string'){
        return document.getElementById(v);
    }else if(typeof v==='object'){
        return v;
    }
}
function getStyle(obj,attr) {
    return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}
function domove(obj,attr,dir,target,EndFn) {
    dir = parseInt(getStyle(obj,attr))<target?dir:-dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var speed = parseInt(getStyle(obj,attr)) + dir;
        if(speed>target&&dir>0||speed<target&&dir<0){
            speed = target;
        }
        obj.style[attr] = speed + 'px';
        if(speed==target){
            clearInterval(obj.timer);
            EndFn&&EndFn();
            //alert(speed);
        }
    },30);
}
function shake(obj,attr,endFn) {
    var pos = parseInt(getStyle(obj,attr));  //有问题
    var timer = null;
    var num=0;
    var pos = parseInt(getStyle(obj,attr));
    var timer = null;
    var num=0;
    var arr = [];//20,-20,18,-18
    for (var i=20;i>0;i-=2){
        arr.push(i,-i);
    }
    arr.push(0);
    clearInterval(timer);
    timer = setInterval(function () {
        obj.style[attr] = pos +arr[num]+'px';
        num++
        if(num==arr.length){
            clearInterval(timer);
            endFn&&endFn();
            clearInterval(timer);
        }
    },50)
}
function op(obj,attr,dir,tin,endfn){
    if(tin>=1){
        tin = 1;
    }else if(tin<=0){
        tin = 0;
    }    //解决透明度大于1或小于0出现的bug
    dir = parseFloat(getStyle(obj,attr)) <= tin ? dir:-dir;
    clearInterval(obj.times);
    obj.times = setInterval(function(){
        var speen = parseFloat(getStyle(obj,attr)) + dir;
        if(speen > tin&&dir > 0||speen < tin&&dir < 0){
            speen = tin;
        }
        obj.style[attr] = speen;
        if(speen == tin){
            speen = tin;
            clearInterval(obj.times);
            endfn&&endfn();
        }
    },50);
}
function abc(num) {
    if(num>3){
        abc(--num);
    }
    document.writeln(num);
}
function calculate() {
    for(var i=0;i<arguments.length;i++){
        wi
    }
}
function getMousePos(event) {
    var e = event;
    return{'X':e.clientX,'Y':e.clientY}
}