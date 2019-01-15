class State {
  constructor(state){
    this.state = state;
  }

  changeState() {
    state = !state;
  };

  get() {
    return this.state;
  }
}


var modal = document.getElementById('modal');
var elDoby = document.getElementsByTagName("body")[0];
var elMain = document.getElementsByTagName("main")[0];
var span = document.getElementsByClassName("close")[0];
var collage = document.getElementById("collage");

elDoby.onclick = function(event) {
  if (event.target == modal) {
    hideModal();
  }
}
elMain.onclick = function(event) {
  var href = "href";
  event = event || window.event;
  var target = event.target || event.srcElement;
  console.log(target.tagName);
  if(target.tagName == "text" || target.tagName == "line") {
    target = target.parentNode;
    href = "xlink:href";
  }

  if(!target.hasAttribute(href)) {return;}
  if(!target.getAttribute(href).includes("-type")) {return;}


  var idElement = target.getAttribute(href).substring(1);
  event.preventDefault();
  showModal(idElement);
}



span.onclick = function() {
  hideModal();
}

function hideModal() {
  modal.style.display = "none";
}


function showModal(idElement) {
  var article = document.getElementById(idElement);
  var clonedElement = article.cloneNode(true);
  collage.innerHTML = "";
  collage.appendChild(clonedElement);
  modal.style.display = "block";
}
