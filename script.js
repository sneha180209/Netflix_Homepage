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

function mail(){
  if(e.style.fontSize=="1.1rem" || e.style.fontSize==""){
    e.style.border="2px solid rgb(109,109,109)";
    e.style.outline="2px solid white";
    e.style.outlineOffset="1px";
    e.style.borderRadius="4px";
    i.style.fontSize="0.8rem";
    i.style.top="350px";
    i.style.left="505px";
    // e.style.paddingtop="20px";
    
  }
  
  if(e2.style.fontSize=="1.1rem" || e2.style.fontSize==""){
    e2.style.border="2px solid rgb(109,109,109)";
    e2.style.outline="2px solid white";
    e2.style.outlineOffset="1px";
    e2.style.borderRadius="4px";
    j.style.fontSize="0.8rem";
    j.style.top="795px";
    j.style.left="499px";



  }

}

document.addEventListener("click", function(event) {
  var e = document.getElementById("email");
  var e2=document.getElementById("email2");
  if (event.target !== e) {
    i.style.fontSize = "1.1rem";
    e.style.border= "1px solid rgb(109,109,109)";
    i.style.top="346px";
    e.style.border="2px solid rgb(109,109,109)";
    e.style.outline="none";

  }
  else{
    e.style.paddingTop = "20px";
    e.style.paddingLeft = "18px";
  }

  if(event.target !== e2){
    j.style.fontSize = "1.1rem";
    e2.style.border= "1px solid rgb(109,109,109)";
    j.style.top="798px"
    e2.style.border="2px solid rgb(109,109,109)";
    e2.style.outline="none";
  }
  else{
    e2.style.paddingTop = "20px";
  }
});

var c1=0;
var c2=0;
var c3=0;
var c4=0;
var c5=0;
var c6=0;


document.addEventListener("click", function(event) {
  
  if (event.target === bone) {
    c1++;
    if(c1%2!=0){
      j.style.top = "1048px";
    }
    else{
      j.style.top = "798px";
    }
  }
  

  if (event.target === btwo) {
    c2++;
    if(c2%2!==0){
      j.style.top = "948px";
    }
    else{
      j.style.top = "798px";
    }
  }

  if (event.target === bthree) {
    c3++;
    if(c3%2!=0){
      j.style.top = "1048px";
    }
    else{
      j.style.top = "798px";
    }
  }

  if (event.target === bfour) {
    c4++;
    if(c4%2!=0){
      j.style.top = "948px";
    }
    else{
      j.style.top = "798px";
    }
  }

  if (event.target === bfive) {
    c5++;
    if(c5%2!=0){
      j.style.top = "948px";
    }
    else{
      j.style.top = "798px";
    }
  }

  if (event.target === bsix) {
    c6++;
    if(c6%2!=0){
      j.style.top = "1048px";
    }
    else{
      j.style.top = "798px";
    }
  }


});

var p1=0;
var p2=0;
var p3=0;
var p4=0;
var p5=0;
var p6=0;

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
      
      document.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p1%2==0){
            j.style.top = "1044px";
            p1++;
          }
        }
      });


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
        x.style.display = "none"; 
      }, 130); 
     }

     bone.addEventListener("click", function(event) {
      if (event.target === e2) {
        if(p1%2!=0){
          j.style.top = "789px";
          p1++;
        }
      }
    });

     
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

      document.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p2%2===0){
            j.style.top = "944px";
            p2++;
          }
          
        }
      });


      

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

      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      setTimeout(function() {
        y.style.display = "none"; 
      }, 130); 
    
    
    btwo.addEventListener("click", function(event) {
      if (event.target === e2) {
        if(p2%2!=0){
          j.style.top = "789px";
          p2++;
        }
      }
    });
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

      bthree.innerHTML = '<span class="material-icons">close</span>Where can I watch?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      // bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
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

      document.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p3%2===0){
            j.style.top = "1044px";
            p3++;
          }
          // j.style.top = "1044px";
        }
      });

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
        z.style.display = "none";
      }, 130); 
    }
    
    bthree.addEventListener("click", function(event) {
      if (event.target === e2) {
        if(p3%2!=0){
          j.style.top = "789px";
          p3++;
        }
      }
    });
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

      bfour.innerHTML = '<span class="material-icons">close</span>How do I cancel?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      // bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
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

      document.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p4%2===0){
            j.style.top = "944px";
            p4++;
          }
          // j.style.top = "944px";
        }
      });
      
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

      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      setTimeout(function() {
        a.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    
    bfour.addEventListener("click", function(event) {
      if (event.target === e2) {
        if(p4%2!=0){
          j.style.top = "789px";
          p4++;
        }
      }
    });
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

      bfive.innerHTML = '<span class="material-icons">close</span>What can I watch on Netflix?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      // bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';
      

      btwo.style.top = "248px";
      bthree.style.top = "345px";
      bfour.style.top = "443px";
      // bfive.style.top = "541px";
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

      document.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p5%2===0){
            j.style.top = "944px";
            p5++;
          }
          // j.style.top = "944px";
        }
      });
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

      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      setTimeout(function() {
        b.style.display = "none"; // Hide the panel after collapsing
      }, 130); 

      bfive.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p5%2!=0){
            j.style.top = "789px";
            p5++;
          }
        }
      });
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

      bsix.innerHTML = '<span class="material-icons">close</span>Is Netflix good for kids?';
      bone.innerHTML = '<span class="material-icons">add</span>What is Netflix?';
      btwo.innerHTML = '<span class="material-icons">add</span>How much does Netflix cost?';
      bthree.innerHTML = '<span class="material-icons">add</span>Where can I watch?';
      bfour.innerHTML = '<span class="material-icons">add</span>How do I cancel?';
      bfive.innerHTML = '<span class="material-icons">add</span>What can I watch on Netflix?';
      // bsix.innerHTML = '<span class="material-icons">add</span>Is Netflix good for kids?';
      

      btwo.style.top = "248px";
      bthree.style.top = "345px";
      bfour.style.top = "443px";
      bfive.style.top = "541px";
      // bsix.style.top = "639px";
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

      // var initialJTop;
      
      document.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p6%2===0){
            j.style.top = "1044px";
            // initialJTop = j.style.top; 
            p6++;
          }
          
        }
         
      });

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
      
      

      bsix.addEventListener("click", function(event) {
        if (event.target === e2) {
          if(p6%2!=0){
            j.style.top = "789px";
            p6++;
          }
        }
      });

      mail();
    }
  }

  
 
  // bsix.addEventListener("click", function(event) {
  //   if (event.target === bsix) {
  //     if(event.target!==bsix)
  //     {
  //       j.style.top = "1044px";
  //     }
  //   }
  // });