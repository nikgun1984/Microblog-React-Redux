// bootstrap React
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
// react libs
import { useState } from "react";
import { v4 as uuid } from "uuid";
import BlogContext from "./components/BlogContext";
import { Link, Switch, Route, Redirect } from "react-router-dom";
// components
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import NewBlog from "./components/NewBlog";
import EditBlog from "./components/EditBlog";
import "./App.css";

const App = () => {
	const [blogList, setBlogList] = useState([]);

	const addBlog = (blog) => {
		const newBlog = {
			...blog,
			comments: [],
			id: uuid(),
		};
		setBlogList((blogs) => [...blogs, newBlog]);
		return newBlog;
	};

	const deleteBlog = (id) => {
		setBlogList(blogList.filter((blog) => blog.id !== id));
	};

	const editBlog = (id, comments, editedBlog) => {
		const blogs = blogList.filter((blog) => blog.id !== id);
		setBlogList([...blogs, { id, comments, ...editedBlog }]);
	};

	const addComment = (id, comment, blog) => {
		console.log(comment);
		const newComment = { id: uuid(), comment };
		const blogs = blogList.filter((blog) => blog.id !== id);
		setBlogList([
			...blogs,
			{ ...blog, comments: [...blog.comments, newComment] },
		]);
	};

	const deleteComment = (id, blog, commentId) => {
		const blogs = blogList.filter((blog) => blog.id !== id);
		setBlogList([
			...blogs,
			{
				...blog,
				comments: [
					...blog.comments.filter((comment) => comment.id !== commentId),
				],
			},
		]);
	};

	return (
		<BlogContext.Provider value={blogList}>
			<div className="App">
				<Jumbotron fluid>
					<Container>
						<h1 className="display-3">Microblog</h1>
						<p>Get in the Rithm of blogging!!!</p>
						<Link to="" className="App-link">
							Blog
						</Link>
						<Link to="/new" className="App-link">
							Add a new Post
						</Link>
					</Container>
				</Jumbotron>
				<Container>
					<Row>
						<Col>
							<Switch>
								<Route exact path="/new">
									<NewBlog addBlog={addBlog} />
								</Route>
								<Route exact path="/:postid/edit">
									<EditBlog editBlog={editBlog} />
								</Route>
								<Route exact path="/:postid">
									<Blog
										deleteBlog={deleteBlog}
										addComment={addComment}
										deleteComment={deleteComment}
									/>
								</Route>
								<Route exact path="/">
									<HomePage />
								</Route>
								<Redirect to="/" />
							</Switch>
						</Col>
					</Row>
				</Container>
			</div>
		</BlogContext.Provider>
	);
};

export default App;
