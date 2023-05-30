function encrypt() {
  var text = document.getElementById("text-input").value.toLowerCase();

  var encryptedText = text.replace(/e/igm, "enter")
                          .replace(/o/igm, "ober")
                          .replace(/i/igm, "imes")
                          .replace(/a/igm, "ai")
                          .replace(/u/igm, "ufat");

  document.getElementById("right-image").style.display = "none";
  document.getElementById("text-error").style.display = "none";
  document.getElementById("text-encrypt").innerHTML = encryptedText;
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";

  const txt = document.getElementById("text-input");
  txt.value = "";
}

function decrypt() {
  var text = document.getElementById("text-input").value.toLowerCase();

  var encryptedText = text.replace(/enter/igm, "e")
                          .replace(/ober/igm, "o")
                          .replace(/imes/igm, "i")
                          .replace(/ai/igm, "a")
                          .replace(/ufat/igm, "u");

  document.getElementById("right-image").style.display = "none";
  document.getElementById("text-error").style.display = "none";
  document.getElementById("text-encrypt").innerHTML = encryptedText;
  document.getElementById("copy").style.display = "show";
  document.getElementById("copy").style.display = "inherit";

  const txt = document.getElementById("text-input");
  txt.value = "";
}

function copy() {
  var content = document.getElementById("text-encrypt");
  content.select();
  document.execCommand("copy");
  
}
