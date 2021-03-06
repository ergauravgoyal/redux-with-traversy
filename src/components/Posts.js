import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"; //Connect components with Redux Store that is provided by provider component
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};
const mapStateToProps = state => ({
  posts: state.posts.items, // we are getting this post from rootReducer
  newPost: state.posts.item
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);

/**
 * connect have 2 sets of () in which 2nd one has component
 * we are giving null as first paramter in first () as we are giving null to state and second paramter is fetch post function
 */
