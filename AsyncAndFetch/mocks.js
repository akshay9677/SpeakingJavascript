const obj = {
  getRequest: {
    getFetch: function () {
      return Promise.resolve(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
      );
    },
    getAjax: function () {
      return Promise.resolve(
        "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
      );
    },
  },
  postRequest: {
    postFetch: function () {
      return Promise.resolve({
        title: "Akshay",
        body: "AKSHAY KANNAN",
        userId: 1,
        id: 101,
      });
    },
    postAjax: function () {
      return Promise.resolve({
        title: "Akshay",
        body: "AKSHAY KANNAN",
        userId: 1,
        id: 101,
      });
    },
  },
  putRequest: {
    putFetch: function () {
      return Promise.resolve({
        id: 1,
        title: "Akshay",
        body: "Akshay Kanann",
        userId: 1,
      });
    },
    putAjax: function () {
      return Promise.resolve({
        id: 1,
        title: "Akshay",
        body: "Akshay Kanann",
        userId: 1,
      });
    },
  },
  deleteRequest: {
    deleteFetch: function () {
      return Promise.resolve(true);
    },
    deleteAjax: function () {
      return Promise.resolve(true);
    },
  },
};

module.exports = obj;
