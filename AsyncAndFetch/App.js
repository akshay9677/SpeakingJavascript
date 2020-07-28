const fetch = require("node-fetch");
var obj = {
  //-------GET REQUEST------
  getRequest: {
    getAjax: async function () {
      //GET Request using AJAX
      var http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          var x = JSON.parse(http.response);
          var k = document.querySelector("div");
          var v = document.querySelector("h1");
          v.innerHTML = x.title;
          k.innerHTML = x.body;
          console.log(x.body);
          return x.body;
        }
      };
      http.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
      http.send();
    },
    getFetch: async function () {
      //GET Request using Fetch
      var x;
      return fetch("https://jsonplaceholder.typicode.com/posts/1").then(
        function (response) {
          response.json().then(function (data) {
            var k = document.querySelector("h1");
            k.innerHTML = data.title;
          });
        }
      );
    },
  },
  postRequest: {
    //-------POST REQUEST------
    postAjax: async function () {
      //POST request using AJAX
      var http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 201) {
          var a = http.response;
          var b = JSON.parse(a);
          return b;
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
    },
    postFetch: async function () {
      //   POST Request using Fetch
      return fetch("https://jsonplaceholder.typicode.com/posts", {
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
          console.log(json);
          return json;
        });
    },
  },
  //-------PUT REQUEST------
  putRequest: {
    putAjax: async function () {
      //PUT Request with AJAX
      var http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          var a = http.response;
          var b = JSON.parse(a);
          console.log(b);
          return b;
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
    },
    putFetch: async function () {
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
        .then((json) => json);
    },
  },
  deleteRequest: {
    deleteAjax: async function () {
      //DELETE Request using AJAX
      var http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          console.log("Data Deleted");
          return true;
        }
      };
      http.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
      http.send();
    },
    deleteFetch: async function () {
      //DELETE Request using Fetch API
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      }).then(() => {
        console.log("Deleted");
        return true;
      });
    },
  },
};

module.exports = obj;
