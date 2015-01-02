var counter = 0; // Track how many times function has ran.
var startProcess = setInterval(revealDownvotes,3000);

function revealDownvotes() {

  // Get all elements starting with this class name.
  var downvotes = document.getElementsByClassName("vote-down");

  for (var i = 0; i < downvotes.length; i++ ) {

    var downvoteCount = downvotes[i].getElementsByClassName("downvotes");

    // Check if the downvote count element has already been created
    // or not, since we'll call the function a number of times because
    // we do not know when the disqus plugin will load. Like damn it takes forever
    if ( downvoteCount.length === 0) {
      // Since element does not yet exist, create it and give it an id.
      downvoteCount = document.createElement("span");
      downvoteCount.className = "downvotes";
      // Define the element's position. Normal position is a bit off.
      downvoteCount.style.position = "relative";
      downvoteCount.style.top = "-3px";
      // Insert element into DOM.
      downvotes[i].insertBefore(downvoteCount, downvotes[i].firstChild);
    } else {
      // If already created, take the first instance.
      downvoteCount = downvoteCount[0];
    }

    // Pull out value of downvote count and insert into the innerHMTL of the
    // created element. String is split with '-' because that's how the
    // classes are named.
    downvoteCount.innerHTML = downvotes[i].className.split("-")[2];

    // If no downvotes, don't display the 0.
    if (downvoteCount.innerHTML === "0")
      downvoteCount.style.display = "none";
  }

  // After function has run 5 times, stop running to reduce load.
  if (++counter === 5)
    clearInterval(startProcess);
}