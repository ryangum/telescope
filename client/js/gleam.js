/**
 * Created with travelli.st 2.
 * File: public/foo．js
 * User: DigitalAndre
 * Date: 2014-09-12
 * Time: 11:21 AM
 * Purpose:
 */
(function(d, t) {
  if(window.location.hash != '#gleam' && ('' + document.cookie).match(/(^|;)\s*GleamULXq9=X($|;)/)) {
    return;
  }
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src = "https://js.gleam.io/ULXq9/ol.js";
  s.parentNode.insertBefore(g, s);
}(document, "script"));