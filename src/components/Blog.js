import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Blog.css";
import { useHistory } from "react-router-dom";
import NewComment from "./NewComment";
import Comment from "./Comment";
import { useSelector } from "react-redux";

const Blog = ({ deleteBlog, addComment, deleteComment }) => {
	const history = useHistory();
	const blogList = useSelector((store) => store.blogs);
	const { postid } = useParams();
	const blog = blogList[postid];
	const handleClickEdit = (e) => {
		e.preventDefault();
		history.push(`/${postid}/edit`);
	};

	const handleClickDelete = (e) => {
		e.preventDefault();
		deleteBlog(postid);
		history.push(`/`);
	};

	return (
		<div>
			<Container>
				<Row>
					<Col md="6">
						<h2>{blog.title}</h2>
					</Col>
					<Col md="6" className="text-right">
						<i class="m-3 fas fa-trash-alt" onClick={handleClickDelete}></i>
						<i class="fas fa-edit" onClick={handleClickEdit}></i>
					</Col>
				</Row>
				<Row>
					<Col>
						<h6>
							<i>{blog.description}</i>
						</h6>
						<p>{blog.body}</p>
					</Col>
				</Row>
				<hr />
				<Row>
					<Col>
						<h4>Comments</h4>
						{Object.keys(blog.comments).map((id) => (
							<Comment
								key={id}
								postId={postid}
								blog={blog}
								id={id}
								comment={blog.comments[id]}
								deleteComment={deleteComment}
							/>
						))}
						<NewComment id={postid} blog={blog} addComment={addComment} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Blog;
