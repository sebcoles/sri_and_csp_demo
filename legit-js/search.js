(function() {
  const input = document.getElementById("searchinput");
  const result = document.getElementById("result");

  input.addEventListener("input", cchoValue);

  function cchoValue(e) {
    result.innerHTML = e.target.value;
  }
})();
