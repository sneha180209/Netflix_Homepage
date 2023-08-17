
function plusone() {
    var x = document.getElementById("panel1");
    var bone = document.querySelector(".btn1");
    var btwo = document.querySelector(".btn2");
    var bthree = document.querySelector(".btn3");
    var bfour = document.querySelector(".btn4");
    var bfive = document.querySelector(".btn5");
    var bsix = document.querySelector(".btn6");

    if (x.style.display === "none" || x.style.display === "") {
      x.style.display = "block";
      x.style.height = "187px";
      btwo.style.top = "455px";
      bthree.style.top = "550px";
      bfour.style.top = "645px";
      bfive.style.top = "740px";
      bsix.style.top = "835px";
    } else {

      btwo.style.top = "247px";
      bthree.style.top = "344px";
      bfour.style.top = "442px";
      bfive.style.top = "540px";
      bsix.style.top = "638px";
      x.style.height = "0px";
      setTimeout(function() {
        x.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
     }


  }

function plustwo() {
    var y = document.getElementById("panel2");
    var btwo = document.querySelector(".btn2");
    var bthree = document.querySelector(".btn3");
    var bfour = document.querySelector(".btn4");
    var bfive = document.querySelector(".btn5");
    var bsix = document.querySelector(".btn6");
    if (y.style.display === "none" || y.style.display === "") {
      y.style.display = "block";
      y.style.height = "89px";
      bthree.style.top = "454px";
      bfour.style.top = "550px";
      bfive.style.top = "646px";
      bsix.style.top = "742px";
    } else {
      bthree.style.top = "344px";
      bfour.style.top = "442px";
      bfive.style.top = "540px";
      bsix.style.top = "638px";
      y.style.height = "0px";
      setTimeout(function() {
        y.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel2");
  }

function plusthree() {
    var z = document.getElementById("panel3");
    var btwo = document.querySelector(".btn2");
    var bthree = document.querySelector(".btn3");
    var bfour = document.querySelector(".btn4");
    var bfive = document.querySelector(".btn5");
    var bsix = document.querySelector(".btn6");
    if (z.style.display === "none" || z.style.display === "") {
      z.style.display = "block";
      z.style.height = "217px";
      bfour.style.top = "679px";
      bfive.style.top = "776px";
      bsix.style.top = "873px";
      // bfour.style.top = "587px";
      // bfive.style.top = "684px";
      // bsix.style.top = "781px";
    }
    else {
      bfour.style.top = "442px";
      bfive.style.top = "540px";
      bsix.style.top = "638px";
      z.style.height = "0px";
      setTimeout(function() {
        z.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel3");
  }

function plusfour() {
    var a = document.getElementById("panel4");
    var btwo = document.querySelector(".btn2");
    var bthree = document.querySelector(".btn3");
    var bfour = document.querySelector(".btn4");
    var bfive = document.querySelector(".btn5");
    var bsix = document.querySelector(".btn6");
    if (a.style.display === "none" || a.style.display === "") {
      a.style.display = "block";
      a.style.height = "90px";
      bfive.style.top = "649px";
      bsix.style.top = "745px";
    }
    else {
      
      bfive.style.top = "534px";
      bsix.style.top = "632px";
      a.style.height = "0px";
      setTimeout(function() {
        a.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel4");
  }

function plusfive() {
    var b = document.getElementById("panel5");
    var btwo = document.querySelector(".btn2");
    var bthree = document.querySelector(".btn3");
    var bfour = document.querySelector(".btn4");
    var bfive = document.querySelector(".btn5");
    var bsix = document.querySelector(".btn6");
    if (b.style.display === "none" || b.style.display === "") {
      b.style.display = "block";
      b.style.height = "90px";
      bsix.style.top = "740px";
    }
    else {
      bsix.style.top = "629px";
      b.style.height = "0px";
      setTimeout(function() {
        b.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel5");
  }

function plussix() {
    var c = document.getElementById("panel6");
    if (c.style.display === "none" || c.style.display === "") {
      c.style.display = "block";
      c.style.height = "190px";
    }
    else {
      c.style.height = "0px";
      setTimeout(function() {
        c.style.display = "none"; // Hide the panel after collapsing
      }, 130); 
    }
    togglePanel("panel6");
  }

  