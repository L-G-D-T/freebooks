function loginForm(){"use strict";var t=document.querySelector(".login-system .login-btn"),e=document.querySelector(".login-system .register-btn"),n=document.querySelector(".login-system form#login"),o=document.querySelector(".login-system form#register");t.onclick=function(){o.style.display="none",n.style.display="block",this.classList.add("active"),e.classList.remove("active")},e.onclick=function(){o.style.display="block",n.style.display="none",this.classList.add("active"),t.classList.remove("active")}}function navToSection(){"use strict";var n=document.querySelectorAll("#section .section"),o=document.querySelectorAll("#navV2 a"),t=document.getElementById("nowReading"),e=document.getElementById("browse"),s=document.getElementById("buyBooks"),c=document.getElementById("favBooks"),l=document.getElementById("wishList"),i=document.getElementById("history"),a=document.getElementById("connect"),r=document.getElementById("navExtendBtn"),d=1;function m(t){for(var e=0;e<n.length;e++)n[e].style.display="none",e<o.length&&o[e].classList.contains("active")&&o[e].classList.remove("active"),a.classList.contains("active")&&a.classList.remove("active");n[t].style.display="block",t<o.length&&o[t].classList.add("active")}r.onclick=function(){1===d?(document.getElementById("navbar").style.width="16rem",document.getElementById("navbar").style.transition="0.3s 0s",document.getElementById("navV1").style.transition="0.3s 0.3s",document.getElementById("navV1").style.transform="translateX(0)",document.getElementById("navV2").style.transition="0.3s 0.6s",document.getElementById("navV2").style.transform="translateX(0)",document.getElementById("navV3").style.transition="0.3s 0.9s",document.getElementById("navV3").style.transform="translateX(0)",document.querySelector("#navExtendBtn .fa-arrow-right").style.transform="rotate(180deg)",d+=1):(document.getElementById("navbar").style.width="0",document.getElementById("navbar").style.transition="0.3s 0.9s",document.getElementById("navV1").style.transition="0.3s 0.6s",document.getElementById("navV1").style.transform="translateX(-13rem)",document.getElementById("navV2").style.transition="0.3s 0.3s",document.getElementById("navV2").style.transform="translateX(-13rem)",document.getElementById("navV3").style.transition="0.3s 0s",document.getElementById("navV3").style.transform="translateX(-13rem)",document.querySelector("#navExtendBtn .fa-arrow-right").style.transform="rotate(360deg)",d-=1)},t.onclick=function(){m(0)},e.onclick=function(){m(1)},s.onclick=function(){m(2)},c.onclick=function(){m(3)},l.onclick=function(){m(4)},i.onclick=function(){m(5)},a.onclick=function(){m(7),this.classList.add("active")},m(6)}function carousel(){"use strict";var n=document.querySelectorAll(".welcome #slides .slide"),t=document.getElementById("controlNext"),e=document.getElementById("controlPrev"),o=0;function s(t){t<0&&(o=n.length-1),t>n.length-1&&(o=0);for(var e=0;e<n.length;e++)n[e].style.opacity="0";n[o].style.opacity="1"}s(o),t.onclick=function(){s(o+=1)},e.onclick=function(){s(o-=1)},setInterval(function(){t.click()},3e4)}window.onpageshow=function(){"use strict";navToSection(),carousel(),loginForm()};