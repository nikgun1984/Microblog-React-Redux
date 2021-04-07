import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "./BlogContext";
import "./Blog.css";
import { useHistory } from "react-router-dom";

const Blog = ({ deleteBlog }) => {
	const history = useHistory();
	const blogList = useContext(BlogContext);
	console.log(blogList);
	const { postid } = useParams();
	const blog = blogList.filter((blog) => blog.id === postid)[0];

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
				<Row>
					<Col>
						<p className="mt-5">
							<em>
								Go to <Link to="/">Home</Link> page
							</em>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Blog;
