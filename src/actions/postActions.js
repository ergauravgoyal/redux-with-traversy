import { FETCH_POSTS, NEW_POSTS } from "./types";

export function fetchPosts() {
  return function(dispatch) {
    console.log("Fetching Data");
    debugger;
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
