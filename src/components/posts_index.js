import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
      <div className="text-xs-right">
        <Link to="/posts/new" className="btn btn-primary">
          Add a post
        </Link>
      </div>
      List of blog posts
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch); // import of bindAction... removed
// }
 // passing below "fetchPosts" (es6 syntax identical to fetchPosts: fetchPosts) object in place of this function is a shorthand

export default connect(null, { fetchPosts })(PostsIndex);
