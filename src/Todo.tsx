export const Todo = (props) => {
  const { title, userId } = props;
  return <p>{`${title}(user_id:)${userId}`}</p>;
};
