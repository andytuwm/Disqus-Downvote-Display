revealDownvotes();

function revealDownvotes() {

  var downvotes = document.getElementsByClassName("vote-down");

  for (var i = 0; i < downvotes.length; i++ ) {

    var downvoteCount = downvotes[i].getElementById("downvotes");

    if (downvoteCount != null) {
      downvoteCount = downvoteCount[0];
    } else {
      downvoteCount = document.createElement("span");
      downvoteCount.id = "downvotes";
      downvotes[i].insertBefore(downvoteCount, downvotes[i].firstChild);
    }

    downvoteCount.innerHTML = downvotes[i].className.split("-")[2];

    if (downvoteCount.innerHTML == 0)
      downvoteCount.style.display = "none";

  }

}