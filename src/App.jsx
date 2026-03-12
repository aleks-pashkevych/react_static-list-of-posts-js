import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

export const App = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      {postsFromServer.map(post => {
        const { userId } = post;
        const user = usersFromServer.find(el => el.id === userId);
        const userComment = commentsFromServer.filter(com => userId === com.id);
        // console.log(user.email, user.id, userId, userComment);
        // console.dir(userComments.postId);
        const data = {};

        data.user = user;
        data.post = post;
        data.comment = userComment;
        // console.log(data.comment);

        return <PostList key={post.id} data={data} />;
      })}
      {/* <PostList /> */}
    </section>
  );
};
