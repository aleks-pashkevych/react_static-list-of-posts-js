import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ data }) => {
  return (
    <div className="PostList">
      <PostInfo data={data} />
    </div>
  );
};
