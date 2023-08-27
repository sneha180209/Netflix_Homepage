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
var i=document.querySelector("h6");
var j=document.querySelector("h5");

var x = document.getElementById("panel1");
var y = document.getElementById("panel2");
var z = document.getElementById("panel3");
var a = document.getElementById("panel4");
var b = document.getElementById("panel5");
var c = document.getElementById("panel6");

var drp=document.querySelector(".dropbtn");
var drp2=document.querySelector(".dropdown-content");

var dl=document.querySelector(".btnlast");
var dl2=document.querySelector(".dropdown-last");


function drop() {
  if (drp2.style.display === "none" || drp2.style.display === "") {
      drp2.style.display = "block";
      drp.style.outline="2px solid white";
      drp.style.outlineOffset="2px";
  } else {
      drp2.style.display = "none";
      drp.style.outline="none";
  }

}

function droplast() {
  if (dl2.style.display === "none" || dl2.style.display === "") {
      dl2.style.display = "block";
      dl.style.outline="2px solid white";
      dl.style.outlineOffset="2px";
  } else {
      dl2.style.display = "none";
      dl.style.outline="none";
  }

}

window.addEventListener("click", function(event) {
  if (!event.target.matches('.dropbtn')) {
      drp2.style.display = "none";
      drp.style.outline="none";
  }
  if (!event.target.matches('.btnlast')) {
      dl2.style.display = "none";
      dl.style.outline="none";
  }
});


function plusone() {

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
      s.style.top="1076px";

      bone.innerHTML = '<span class="material-icons">close</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';


      y.style.height = "0px";
      z.style.height = "0px";
      a.style.height = "0px";
      b.style.height = "0px";
      c.style.height = "0px";
      setTimeout(function() {
        y.style.display = "none"; 
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      }, 130);


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
      s.style.top="826px";
      
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      setTimeout(function() {
        x.style.display = "none"; 
      }, 130); 
  }
     
  }

  
function plustwo() {

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
      s.style.top="976px";

      btwo.innerHTML = '<span class="material-icons">close</span>How much does Netflix cost?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';
      
      
      btwo.style.top = "248px";
      x.style.height = "0px";
      z.style.height = "0px";
      a.style.height = "0px";
      b.style.height = "0px";
      c.style.height = "0px";
      setTimeout(function() {
        x.style.display = "none"; 
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      }, 130);

    } else {
      bthree.style.top = "344px";
      bfour.style.top = "440px";
      bfive.style.top = "536.5px";
      bsix.style.top = "632px";
      y.style.height = "0px";
      
      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";
      s.style.top="826px";

      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      setTimeout(function() {
        y.style.display = "none"; 
      }, 130); 

  }
  }

function plusthree() {

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
      s.style.top="1076px";

      bthree.innerHTML = '<span class="material-icons">close</span>Where can I watch?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';
      

      btwo.style.top = "246px";
      bthree.style.top = "341px";
      
    
      x.style.height = "0px";
      y.style.height = "0px";
      a.style.height = "0px";
      b.style.height = "0px";
      c.style.height = "0px";
      setTimeout(function() {
        x.style.display = "none"; 
        y.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      }, 130);

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
      s.style.top="826px";

      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      setTimeout(function() {
        z.style.display = "none";
      }, 130); 
  
  }
  }

function plusfour() {

    if (a.style.display === "none" || a.style.display === "") {
      a.style.display = "block";
      a.style.height = "90px";
      bfive.style.top = "648px";
      bsix.style.top = "744px";

      l6.style.height="160%";

      l5.style.top="4050px";
      l5.style.height="65%";

      l1.style.top="880px";
      l2.style.top="950px";
      l3.style.top="960px";
      s.style.top="976px";

      bfour.innerHTML = '<span class="material-icons">close</span>How do I cancel?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';
      

      btwo.style.top = "248px";
      bthree.style.top = "345px";
      bfour.style.top = "441.5px";
      x.style.height = "0px";
      y.style.height = "0px";
      z.style.height = "0px";
      b.style.height = "0px";
      c.style.height = "0px";
      setTimeout(function() {
        x.style.display = "none"; 
        y.style.display = "none";
        z.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
      }, 130);
      
    }
    else {
      
      bfive.style.top = "538px";
      bsix.style.top = "634px";
      a.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";
      s.style.top="826px";

      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      setTimeout(function() {
        a.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
      
  }
  }


function plusfive() {

  if (b.style.display === "none" || b.style.display === "") {
      b.style.display = "block";
      b.style.height = "90px";
      bsix.style.top = "749px";

      l6.style.height="160%";

      l5.style.top="4050px";
      l5.style.height="65%";

      l1.style.top="880px";
      l2.style.top="950px";
      l3.style.top="960px";
      s.style.top="976px";

      bfive.innerHTML = '<span class="material-icons">close</span>What can I watch on Netflix?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';

      btwo.style.top = "248px";
      bthree.style.top = "345px";
      bfour.style.top = "443px";
      bfive.style.top = "541px";
      x.style.height = "0px";
      y.style.height = "0px";
      z.style.height = "0px";
      a.style.height = "0px";
      c.style.height = "0px";
      setTimeout(function() {
        x.style.display = "none"; 
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        c.style.display = "none";
      }, 130);

  
    }
    else {
      bsix.style.top = "639px";
      b.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";
      s.style.top="826px";

      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      setTimeout(function() {
        b.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
  
    }
  }

function plussix() {

  if (c.style.display === "none" || c.style.display === "") {
      c.style.display = "block";
      c.style.height = "190px";

      l6.style.height="172%";

      l5.style.top="4150px";
      l5.style.height="65%";

      l1.style.top="980px";
      l2.style.top="1050px";
      l3.style.top="1060px";
      s.style.top="1076px";

      bsix.innerHTML = '<span class="material-icons">close</span>Is Netflix good for kids?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      
      btwo.style.top = "248px";
      bthree.style.top = "345px";
      bfour.style.top = "443px";
      bfive.style.top = "541px";
      bsix.style.top = "639px";
      x.style.height = "0px";
      y.style.height = "0px";
      z.style.height = "0px";
      a.style.height = "0px";
      b.style.height = "0px";
      setTimeout(function() {
        x.style.display = "none"; 
        y.style.display = "none";
        z.style.display = "none";
        a.style.display = "none";
        b.style.display = "none";
      }, 130);
    }
    else {
      c.style.height = "0px";

      l6.style.height="138%";

      l5.style.top="3922px";
      l5.style.height="65%";

      l1.style.top="745px";
      l2.style.top="800px";
      l3.style.top="810px";
      s.style.top="826px";
      
      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';
      setTimeout(function() {
        c.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
      
    
    }
  }

  
