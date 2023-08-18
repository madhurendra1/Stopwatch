// getting timer Box
const min=document.getElementById('min');
const sec=document.getElementById('sec');
const milli=document.getElementById('milli');

// Declaration of Variables
let [miliseconds,second,minutes]=[0,0,0];
let timer=null;

//  for the start the stop watch
function StopWatched(){
    miliseconds+=10;
    if(miliseconds===1000){
        miliseconds=0;
        second++;
        if(second===60){
            second=0;
            minutes++;
            if(minutes===60){
                minutes=0;
            }
        }
    }

    let m= minutes <10 ? "0"+minutes : minutes;
    let s= second <10 ? "0"+second : second;
    let mili= miliseconds <10 ? "0"+miliseconds : miliseconds;

    min.innerHTML=m;
    sec.innerHTML=s;
    milli.innerHTML=mili;
    
}

// Start The Timer
function watchStart(){
   if(timer!==null){
      clearInterval(timer);
   }
   timer=setInterval(StopWatched,10);
}

// Stop The Timer
function StopWatch(){
    clearInterval(timer);
     timer=null;
}

// Restart The Timer
function restart(){
    clearInterval(timer);
    timer=null;
    miliseconds=0;
    second=0;
    minutes=0;
    min.innerHTML="00";
    sec.innerHTML="00";
    milli.innerHTML="00";
    

}
