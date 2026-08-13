(function () {
  "use strict";

  var input = document.getElementById("blogSearch");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".post-card"));
  var emptyMsg = document.getElementById("searchEmpty");

  if (!input || !cards.length) return;

  var indexed = cards.map(function (card) {
    return {
      el: card,
      text: card.textContent.toLowerCase(),
    };
  });

  input.addEventListener("input", function () {
    var term = input.value.trim().toLowerCase();
    var visibleCount = 0;

    indexed.forEach(function (item) {
      var matches = term === "" || item.text.indexOf(term) !== -1;
      item.el.classList.toggle("hidden", !matches);
      if (matches) visibleCount++;
    });

    emptyMsg.classList.toggle("show", visibleCount === 0);
  });
})();
