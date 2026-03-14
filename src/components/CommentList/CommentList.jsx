export const CommentList = ({ comments }) => {
  return (
    <div className="CommentInfo">
      {comments.map(com => {
        return (
          <div key={com.id}>
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">{com.name}</strong>
              {' by '}

              <a className="CommentInfo__email" href={`mailto:${com.email}`}>
                {com.email}
              </a>
            </div>

            <div className="CommentInfo__body">{com.body}</div>
          </div>
        );
      })}
    </div>
  );
};
