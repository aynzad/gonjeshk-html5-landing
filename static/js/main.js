var timeAfterLoadComplete = 300;
var timeBackgroundPaddingAnimation = 1000;
var clientHeight = window.innerHeight;
var clientWidth = window.innerWidth;
window.onload = function () {
  var body = document.querySelector("body");
  setTimeout(function () {
    document.querySelector(".page .center-wrapper").setAttribute("hidden", "");
    document
      .querySelector(".loader-wrapper")
      .setAttribute("class", "fade-loader");
    if (clientWidth > 357) {
      body.className += " cpadding15";
    } else {
      body.className += " cpadding0";
    }
  }, timeAfterLoadComplete);

  setTimeout(function () {
    document.querySelector("#loader-wrapper").setAttribute("hidden", "");
    document.querySelector(".page .center-wrapper").removeAttribute("hidden");
  }, timeAfterLoadComplete + timeBackgroundPaddingAnimation);
  setTimeout(function () {
    document.querySelector(".page .center-wrapper").className += " showThis";
    body.classList.remove("not-load");
  }, timeAfterLoadComplete + timeBackgroundPaddingAnimation);

  setTimeout(function () {
    document.querySelector(".ayza-desc").className += " showThis";
  }, timeAfterLoadComplete + timeBackgroundPaddingAnimation + 100);

  setTimeout(function () {
    document.querySelector("#work").className += " showThis";
  }, timeAfterLoadComplete + timeBackgroundPaddingAnimation + 400);
  setTimeout(function () {
    document.querySelector("#social").className += " showThis";
    document.querySelector("#blog").className += " showThis";
    StartTextAnimation(0);
  }, timeAfterLoadComplete + timeBackgroundPaddingAnimation + 600);
  var social = document.querySelector("#social");
  var close = document.querySelector(".nav__item--close");

  social.addEventListener("click", onSocialClick);
  close.addEventListener("click", onCloseClick);

  function hideElement(Selector) {
    document.querySelector(Selector).classList.remove("showThis");
    setTimeout(function () {
      document.querySelector(Selector).className += " Vhidden";
    }, 1000);
  }
  function ShowElement(Selector) {
    setTimeout(function () {
      document.querySelector(Selector).classList.remove("Vhidden");
    }, 700);
    setTimeout(function () {
      document.querySelector(Selector).className += " showThis";
    }, 1000);
  }
  function onSocialClick(event) {
    event.preventDefault();
    hideElement("#social");
    hideElement("#blog");
    hideElement("#work");
    ShowElement(".nav__item--gmail");
    ShowElement(".nav__item--twitter");
    ShowElement(".nav__item--telegram");
    ShowElement(".nav__item--close");
  }

  function onCloseClick(event) {
    event.preventDefault();

    hideElement(".nav__item--gmail");
    hideElement(".nav__item--twitter");
    hideElement(".nav__item--telegram");
    hideElement(".nav__item--close");
    ShowElement("#social");
    ShowElement("#blog");
    ShowElement("#work");
  }
};
// array with texts to type in typewriter
var dataText = [
  "طراح رابط کاربری وب و موبایل",
  "توسعه دهنده وب",
  "بتمن",
  "ببخشید :دی",
  "فقط همون طراح و توسعه دهنده :دی",
];

// type one text in the typwriter
// keeps calling itself until the text is finished
function typeWriter(text, i, fnCallback) {
  // chekc if text isn't finished yet
  if (i < text.length) {
    // add next character to h1
    document.querySelector(".ayza-desc").innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
    if (text.substring(0, i + 1) == "بتمن") {
      document.querySelector(".ayza-head").className += " batman";
    } else if (text.substring(0, i + 1) == "ببخشید :دی") {
      document.querySelector(".ayza-head").classList.remove("batman");
    }
    // wait for a while and call this function again for next character
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback);
    }, 75);
  }
  // text finished, call callback if there is a callback function
  else if (typeof fnCallback == "function") {
    // call callback after timeout
    setTimeout(fnCallback, 2000);
  }
}
// start a typewriter animation for a text in the dataText array
function StartTextAnimation(i) {
  if (typeof dataText[i] == "undefined") {
    setTimeout(function () {
      StartTextAnimation(0);
    }, 30000);
  } else {
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      typeWriter(dataText[i], 0, function () {
        // after callback (and whole text has been animated), start next text
        StartTextAnimation(i + 1);
      });
    }
  }
}
