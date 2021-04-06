import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "./BlogContext";

const Blog = () => {
	const blogList = useContext(BlogContext);
	console.log(blogList);
	const { postid } = useParams();
	const blog = blogList.filter((blog) => blog.id === postid)[0];
	console.log(blog);
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<h1>{blog.title}</h1>
						<h4>
							<i>{blog.description}</i>
						</h4>
						<p>{blog.body}</p>
					</Col>
				</Row>
				<Row>
					<p>
						Go to <Link to="/">Home</Link> page
					</p>
				</Row>
			</Container>
		</div>
	);
};

export default Blog;
