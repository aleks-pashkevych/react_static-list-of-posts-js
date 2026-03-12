export const CommentList = ({ data }) => {
  return (
    <div className="CommentInfo">
      {data.comment.map(com => {
        return (
          <div key={com.id}>
            <div className="CommentInfo__title">
              <strong className="CommentInfo__name">{com.name}</strong>
              {' by '}

              <a className="CommentInfo__email" href={com.email}>
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
