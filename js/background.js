let deg = 0 ;

document.querySelector("body").style.backgroundImage = `linear-gradient(${deg} , rgb(117, 0, 0) , rgb(50, 50, 255))`

setInterval(function(){
    document.querySelector("body").style.backgroundImage = `linear-gradient(${deg}deg , rgb(117, 0, 0) , rgb(50, 50, 255))`
    deg++
    if(deg > 360){
        deg = 0
    }
} , 50)