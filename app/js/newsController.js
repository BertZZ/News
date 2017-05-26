'use strict';

  for (var i = 0; i < story.storyList.length; i++) {
    var newLink = document
    .createElement("a")
    .setAttribute("id", `a${i}`)
    .setAttribute("href", `#ps${i}`)
    newLink.innerHTML = "storymodel.headline" + "<br>"
    var newSum = document.createElement("p").setAttribute("id", `p${i}`)
    newSum.innerHTML = "storymodel.summary"
    var displayStory = document.createElement("p").setAttribute("id", `ps${i}`)
    displayStory.innerHTML = "storymodel.picture" + "storymodel.fullStory"
  }
