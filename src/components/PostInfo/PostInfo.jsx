import { CommentList } from '../CommentList/CommentList';

export const PostInfo = ({ data }) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{data.post.title}</h3>

        <p>
          {' Posted by  '}

          <a className="UserInfo" href={data.user.email}>
            {data.user.name}
          </a>
        </p>
      </div>

      <p className="PostInfo__body">{data.post.body}</p>

      <hr />

      {data.comment.length === 0 ? (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      ) : (
        <CommentList data={data} />
      )}
    </div>
  );
};
