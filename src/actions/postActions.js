import { FETCH_POSTS, NEW_POST } from "./types";

export function fetchPosts() {
  return function(dispatch) {
    console.log("Fetching Data");
    //debugger;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        dispatch({
          type: FETCH_POSTS,
          payload: posts //Whatever data is coming we are assining to payload
        })
      );
  };
}
export function createPost(postData) {
  return function(dispatch) {
    console.log("createPosts Action called");
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(post =>
        dispatch({
          type: NEW_POST,
          payload: post //Whatever data is coming we are assining to payload
        })
      );
  };
}
