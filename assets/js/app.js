//window.onload = function() {
var char= [
    question1 = {
        question: "how old is this1?",
        amswer: "345",
        right:"assets/images/smile.gif",
        wrong: "assets/images/cry.gif",
        win: "assets/images/win.gif"
    },
    question2 = {
        question: "how old is this2?",
        amswer: "678",
        right:"/assets/images/smile.gif",
        wrong: "/assets/images/cry.gif",
        win: "/assets/images/win.gif"
    },
    question3 = {
        question: "how old is this3?",
        amswer: "8910",
        right:"/assets/images/smile.gif",
        wrong: "/assets/images/cry.gif",
        win: "/assets/images/win.gif"
    },
    question4 = {
        question: "how old is this4?",
        amswer: "111213",
        right:"/assets/images/smile.gif",
        wrong: "/assets/images/cry.gif",
        win: "/assets/images/win.gif"
    }

]

   
var interval;   
var arr;
var questionOnScreen;
var win = 0;
var times = char.length;
var selected = false;
var next=0;
var n; // question numbers
gameStart();

$("#first").on("click", function(){
    //debugger;
    event.preventDefault();
    onClick(0);
    $()
    console.log(times,win);
    });
$("#second").on("click", function(){
    event.preventDefault();
    onClick(1);
    console.log(times,win);
    });
$("#third").on("click", function(){
    event.preventDefault();
    onClick(2);
    console.log(times,win);
    });
$("#forth").on("click", function(){
    event.preventDefault();
    onClick(3);
    console.log(times,win);
    });


  function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function gameStart(){
    arr = shuffle(char);
    
    console.log(arr);
    next = 0;
    gameNext();
    
}

function gameNext(){
    startCountDown();
    
    n = Math.floor(Math.random() * 4);
    questionOnScreen = arr[n].question;
    console.log(questionOnScreen);
    $("#theQuestion").text("Q1: " + questionOnScreen);
    console.log(questionOnScreen);
   
    $(".list-group").removeClass( "hidden" );
    $("#images").addClass( "hidden" );
    $("#images").attr("src"," ");
    $("#rightAnswer").addClass("hidden");
            
    $("#first").text(arr[0].amswer);
    
    $("#second").text(arr[1].amswer);

    $("#third").text(arr[2].amswer);

    $("#forth").text(arr[3].amswer);
}
function startCountDown(){
    var counter = 10;
    interval = setInterval(function() {
        counter--;
        // Display 'counter' wherever you want to display it.
        $("#countDown").text("You have " + counter + "s remain!");
        if (counter == 0) {
            // Display a login box
            debugger;
            times--;
            $("#rightAnswer").removeClass("hidden");
            $("#answers").text( arr[n].amswer );
            clearInterval(interval);    
            setTimeout(function(){
                console.log("You are wrong")
                gameNext();
            },2000);
        }
    }, 1000);
}

function onClick(n1){
   // debugger;

   event.preventDefault();
   clearInterval(interval); 
    $(".list-group").addClass( "hidden" );
    $("#images").removeClass( "hidden" );
    $("#rightAnswer").removeClass("hidden");
    if( !selected ){
        selected = true;
    } 
    /*else {
        return; //leave the function
    }*/
    
   console.log(arr[n1].amswer);
   var answer = arr[n1].question;
   if(questionOnScreen == answer){// this means you got the right answer!!
        $("#images").attr("src",arr[n1].right);
        //console.log(arr[n2].right);
        win ++;
        //clearInterval(interval); 
        setTimeout(function(){
            console.log("You are right")
            gameNext();
        },3000);
    }else{
        debugger;
        $("#images").attr("src",arr[n1].wrong);
        $("span").text( arr[n].amswer );
        //console.log(arr[n2].right);
        times --;
        //clearInterval(interval); 
        setTimeout(function(){
            console.log("You are wrong")
            gameNext();
        },3000);
    }
}