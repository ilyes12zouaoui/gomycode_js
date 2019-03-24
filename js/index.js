function bold() {
  if (document.getElementById("text").style.fontWeight != "bold") {
    document.getElementById("text").style.fontWeight = "bold";
  } else {
    document.getElementById("text").style.fontWeight = "normal";
  }
}

function italic() {
  //  console.log()
  if (document.getElementById("text").style.fontStyle != "italic") {
    document.getElementById("text").style.fontStyle = "italic";
  } else {
    document.getElementById("text").style.fontStyle = "normal";
  }
}

function underline() {
  if (document.getElementById("text").style.textDecoration != "underline") {
    document.getElementById("text").style.textDecoration = "underline";
  } else {
    document.getElementById("text").style.textDecoration = "none";
  }
}

function fontSize() {
  var b = document.getElementById("fontValue").value;
  if (b == "12px") {
    document.getElementById("text").style.fontSize = b;
  } else if (b == "14px") {
    document.getElementById("text").style.fontSize = b;
  } else if (b == "16px") {
    document.getElementById("text").style.fontSize = b;
  }
}
