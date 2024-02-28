import Header from './components/header/Header';
import './App.scss';
import Headline from './components/headline/Headline';
import Button from './components/button/Button';
import { connect } from 'react-redux';
import { fetchPosts } from './redux/actions';
import ListItem from './components/listItem/ListItem';

function App(props) {
  const { posts } = props;

  const fetch = () => {
    props.fetchPosts();
  };

  const configButton = {
    buttonText: 'Get posts',
    emitEvent: fetch,
  };

  return (
    <div data-test="app-component">
      <Header />
      <main className="main">
        <Headline header="Posts" desc="Click the button to render posts!" />
        <Button {...configButton} />
        {posts?.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };
              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer,
  };
};

export default connect(mapStateToProps, { fetchPosts })(App);
