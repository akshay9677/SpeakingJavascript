const obj = require("./App");
describe("Test cases for CRUD Operations using Fetch API and AJAX", () => {
  test("GET Request with Fetch", () => {
    obj.getRequest.getFetch().then((title) => {
      expect(title).toBe(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
    });
  });
  test("GET Request with AJAX", () => {
    obj.getRequest.getAjax().then((body) => {
      expect(body).toBe(
        "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      );
    });
  });
  test("POST Request with Fetch", () => {
    var expected = {
      title: "Akshay",
      body: "AKSHAY KANNAN",
      userId: 1,
      id: 101,
    };
    obj.postRequest.postFetch().then((data) => {
      expect(data).toBe(expected);
    });
  });
  test("POST Request with AJAX", () => {
    var expected = {
      title: "Akshay",
      body: "AKSHAY KANNAN",
      userId: 1,
      id: 101,
    };
    obj.postRequest.postAjax().then((data) => {
      expect(data).toBe(expected);
    });
  });
  test("PUT Request using Fetch", () => {
    var expected = { id: 1, title: "Akshay", body: "Akshay Kanann", userId: 1 };
    obj.putRequest.putFetch().then((data) => {
      expect(data).toBe(expected);
    });
  });
  test("PUT Request using AJAX", () => {
    var expected = { id: 1, title: "Akshay", body: "Akshay Kanann", userId: 1 };
    obj.putRequest.putAjax().then((data) => {
      expect(data).toBe(expected);
    });
  });
  test("DELETE Request using Fetch", () => {
    obj.deleteRequest.deleteFetch().then((data) => {
      expect(data).toBeTruthy();
    });
  });
  test("DELETE Request using AJAX", () => {
    obj.deleteRequest.deleteAjax().then((data) => {
      expect(data).toBeTruthy();
    });
  });
});

//--------Test Cases Result---------
// PASS  ./Ajax.test.js
// Test cases for CRUD Operations using Fetch API
//   √ GET Request with Fetch (1 ms)
//   √ GET Request with AJAX (17 ms)
//   √ POST Request with Fetch (1 ms)
//   √ POST Request with AJAX (4 ms)
//   √ PUT Request using Fetch
//   √ PUT Request using AJAX (3 ms)
//   √ DELETE Request using Fetch
//   √ DELETE Request using AJAX (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       8 passed, 8 total
