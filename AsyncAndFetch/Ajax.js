var fetching = async function () {
  //GET Request using AJAX
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var k = document.querySelector("div");
      k.innerHTML = http.response;
    }
  };
  http.open("GET", "https://httpbin.org/html", true);
  http.send();

  //GET Request using Fetch
  fetch("https://jsonplaceholder.typicode.com/posts/1").then(function (
    response
  ) {
    response.json().then(function (data) {
      var k = document.querySelector("h1");

      k.innerHTML = data.title;
    });
  });
};

//POST Requests
var sendData = async function () {
  //   POST Request using Fetch
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Akshay",
      body: "AKSHAY KANNAN",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json, "POST Request using Fetch ");
    });

  //POST request using AJAX
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 201) {
      var a = http.response;
      var b = JSON.parse(a);
      console.log(b, "POST request using AJAX");
    }
  };
  http.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(
    JSON.stringify({
      title: "Akshay",
      body: "AKSHAY KANNAN",
      userId: 1,
    })
  );
  alert("Data send");
};

//PUT Request
var updateData = async function () {
  //PUT Request using Fetch API
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "Akshay",
      body: "Akshay Kanann",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json, "PUT Request using Fetch API"));

  //PUT Request with AJAX
  var http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      var a = http.response;
      var b = JSON.parse(a);
      console.log(b, "PUT Request with AJAX");
    }
  };
  http.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(
    JSON.stringify({
      id: 1,
      title: "Akshay",
      body: "Akshay Kanann",
      userId: 1,
    })
  );
};

//DELETE Request
var deleteData = async function () {
  //DELETE Request using Fetch API
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  //DELETE Request using AJAX
  var http = new XMLHttpRequest();
  http.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
  http.send();
  alert("Deleted Data");
};
