
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
      btwo.style.top = "455px";
      bthree.style.top = "550px";
      bfour.style.top = "645px";
      bfive.style.top = "740px";
      bsix.style.top = "835px";
    } else {
      x.style.display = "none";
      bone.style.top = "148px";
      btwo.style.top = "247px";
      bthree.style.top = "344px";
      bfour.style.top = "442px";
      bfive.style.top = "540px";
      bsix.style.top = "638px";
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
      bthree.style.top = "454px";
      bfour.style.top = "550px";
      bfive.style.top = "646px";
      bsix.style.top = "742px";
    } else {
      y.style.display = "none";
      bthree.style.top = "344px";
      bfour.style.top = "442px";
      bfive.style.top = "540px";
      bsix.style.top = "638px";
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
      bfour.style.top = "587px";
      bfive.style.top = "684px";
      bsix.style.top = "781px";
    }
    else {
      z.style.display = "none";
      bfour.style.top = "442px";
      bfive.style.top = "540px";
      bsix.style.top = "638px";
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
      bfive.style.top = "649px";
      bsix.style.top = "745px";
    }
    else {
      a.style.display = "none";
      bfive.style.top = "534px";
      bsix.style.top = "632px";
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
      bsix.style.top = "740px";
    }
    else {
      b.style.display = "none";
      bsix.style.top = "629px";
    }
    togglePanel("panel5");
  }

function plussix() {
    var c = document.getElementById("panel6");
    if (c.style.display === "none" || c.style.display === "") {
      c.style.display = "block";
    }
    else {
      c.style.display = "none";
    }
    togglePanel("panel6");
  }

  