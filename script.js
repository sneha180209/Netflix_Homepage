var bone = document.querySelector(".btn1");
var btwo = document.querySelector(".btn2");
var bthree = document.querySelector(".btn3");
var bfour = document.querySelector(".btn4");
var bfive = document.querySelector(".btn5");
var bsix = document.querySelector(".btn6");

var l1=document.getElementById("lastp");
var l2=document.getElementById("email2");
var l3=document.getElementById("GetStarted2");

var l5=document.querySelector(".netflixfooter");
var l6=document.querySelector(".netflixmiddle6");

var e=document.getElementById("email");
var e2=document.getElementById("email2");
var i=document.querySelector(".input");

function mail(){
  if(e.style.fontSize=="1.1rem" || e.style.fontSize==""){
    e.style.border="2px solid rgb(109,109,109)";
    e.style.outline="2px solid white";
    e.style.outlineOffset="1px";
    e.style.borderRadius="4px";
    e.style.fontSize="0.8rem";  
    e.style.paddingBottom="20px";
    e.style.paddingLeft="15px";
    
  }
  
  if(e2.style.fontSize=="1.1rem" || e2.style.fontSize==""){
    e2.style.border="2px solid rgb(109,109,109)";
    e2.style.outline="2px solid white";
    e2.style.outlineOffset="1px";
    e2.style.borderRadius="4px";
    e2.style.fontSize="0.8rem";  
    e2.style.paddingBottom="20px";
    e2.style.paddingLeft="15px";
    // e.classList.add("clicked");
  }

}

document.addEventListener("click", function(event) {
  var e = document.getElementById("email");
  var e2=document.getElementById("email2");
  if (event.target !== e) {
    e.style.fontSize = "1.1rem";
    e.style.border= "1px solid rgb(109,109,109)";
    e.style.padding="3px 22px"
    e.style.border="2px solid rgb(109,109,109)";
    e.style.outline="none";

  }
  if(event.target !== e2){
    e2.style.fontSize = "1.1rem";
    e2.style.border= "1px solid rgb(109,109,109)";
    e2.style.padding="3px 22px"
    e2.style.border="2px solid rgb(109,109,109)";
    e2.style.outline="none";
  }
});

function plusone() {
    var x = document.getElementById("panel1");
    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
      x.style.height = "187px";
      btwo.style.top = "455px";
      bthree.style.top = "550px";
      bfour.style.top = "645px";
      bfive.style.top = "740px";
      bsix.style.top = "835px";

      l6.style.height="172%";

      l5.style.top="4150px";
      l5.style.height="70%";

      l1.style.top="980px";
      l2.style.top="1050px";
      l3.style.top="1060px";

      bone.innerHTML = '<span class="material-icons">close</span>What is Netflix?';
    } 
    else {
      btwo.style.top = "248px";
      bthree.style.top = "345px";
      bfour.style.top = "443px";
      bfive.style.top = "541px";
      bsix.style.top = "639px";
      x.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";
      
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      setTimeout(function() {
        x.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
     }


  }

function plustwo() {
    var y = document.getElementById("panel2");
    if (y.style.display === "none" || y.style.display === "") {
      y.style.display = "block";
      y.style.height = "89px";
      bthree.style.top = "454px";
      bfour.style.top = "550px";
      bfive.style.top = "646px";
      bsix.style.top = "742px";

      l6.style.height="160%";

      l5.style.top="4050px";
      l5.style.height="65%";

      l1.style.top="880px";
      l2.style.top="950px";
      l3.style.top="960px";

      btwo.innerHTML = '<span class="material-icons">close</span>How much does Netflix cost?';

    } else {
      bthree.style.top = "341px";
      bfour.style.top = "435px";
      bfive.style.top = "531.5px";
      bsix.style.top = "627px";
      y.style.height = "0px";
      
      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";

      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      setTimeout(function() {
        y.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel2");
  }

function plusthree() {
    var z = document.getElementById("panel3");
    if (z.style.display === "none" || z.style.display === "") {
      z.style.display = "block";
      z.style.height = "212px";
      bfour.style.top = "669px";
      bfive.style.top = "765px";
      bsix.style.top = "860px";

      l6.style.height="172%";

      l5.style.top="4150px";
      l5.style.height="70%";

      l1.style.top="980px";
      l2.style.top="1050px";
      l3.style.top="1060px";

      bthree.innerHTML = '<span class="material-icons">close</span>Where can I watch?';
    }
    else {
      bfour.style.top = "435.5px";
      bfive.style.top = "531px";
      bsix.style.top = "627px";
      z.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";

      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      setTimeout(function() {
        z.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel3");
  }

function plusfour() {
    var a = document.getElementById("panel4");
    if (a.style.display === "none" || a.style.display === "") {
      a.style.display = "block";
      a.style.height = "90px";
      bfive.style.top = "641px";
      bsix.style.top = "735px";

      l6.style.height="160%";

      l5.style.top="4050px";
      l5.style.height="65%";

      l1.style.top="880px";
      l2.style.top="950px";
      l3.style.top="960px";

      bfour.innerHTML = '<span class="material-icons">close</span>How do I cancel?';
    }
    else {
      
      bfive.style.top = "531px";
      bsix.style.top = "627px";
      a.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";

      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      setTimeout(function() {
        a.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel4");
  }

function plusfive() {
    var b = document.getElementById("panel5");
    if (b.style.display === "none" || b.style.display === "") {
      b.style.display = "block";
      b.style.height = "90px";
      bsix.style.top = "737px";

      l6.style.height="160%";

      l5.style.top="4050px";
      l5.style.height="65%";

      l1.style.top="880px";
      l2.style.top="950px";
      l3.style.top="960px";

      bfive.innerHTML = '<span class="material-icons">close</span>What can I watch on Netflix?';
    }
    else {
      bsix.style.top = "627px";
      b.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";

      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      setTimeout(function() {
        b.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
  }

function plussix() {
    var c = document.getElementById("panel6");
    if (c.style.display === "none" || c.style.display === "") {
      c.style.display = "block";
      c.style.height = "190px";

      l6.style.height="172%";

      l5.style.top="4150px";
      l5.style.height="65%";

      l1.style.top="980px";
      l2.style.top="1050px";
      l3.style.top="1060px";

      bsix.innerHTML = '<span class="material-icons">close</span>Is Netflix good for kids?';
    }
    else {
      c.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";

      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';
      setTimeout(function() {
        c.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
  }

  