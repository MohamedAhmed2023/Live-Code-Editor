document.getElementById("html").value = "<body> \n \n </body>";
document.getElementById("css").value = "<style>\n \n</style>";
document.getElementById("js").value = "<script> \n \n </script>";

function showContent() {
  var htmlCode = document.querySelector("#html").value;
  var cssCode = "" + document.querySelector("#css").value + "";
  var jsCode = "" + document.querySelector("#js").value + "";
  var result = document.querySelector("#result").contentWindow.document;
  result.open();
  result.write(htmlCode + cssCode + jsCode);
  result.close();
}
