genData(function* () {
  var x = yield fetch("https://jsonplaceholder.typicode.com/posts/1");
  var y = yield fetch("https://jsonplaceholder.typicode.com/posts/2");
});

function genData(generator) {
  var gen = generator();
  var b = gen.next();
  b.value.then((resp) => {
    resp.json().then((data) => {
      var tag = document.querySelector("h1");
      tag.innerHTML = data.title;
    });
  });
  var c = gen.next();
  c.value.then((resp) => {
    resp.json().then((data) => {
      var tag = document.querySelector("p");
      tag.innerHTML = data.body;
    });
  });
}
