import "./Comment.css";

const Comment = ({ id, comment, deleteComment, postId, blog }) => {
	const handleDeleteComment = (e) => {
		e.preventDefault();
		deleteComment(postId, blog, id);
	};
	return (
		<div>
			<i className="m-2 fas fa-times" onClick={handleDeleteComment}></i>
			<span id={id} key={id}>
				<i>{comment}</i>
			</span>
		</div>
	);
};

export default Comment;
