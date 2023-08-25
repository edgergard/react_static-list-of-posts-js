import './CommentInfo.scss';

export const CommentInfo = ({ comment }) => {
  const {
    title,
    email,
    body,
    name,
  } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        {title}
        <strong className="CommentInfo__name">
          {name}
        </strong>

        {` by `}

        <a
          className="CommentInfo__email"
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};
