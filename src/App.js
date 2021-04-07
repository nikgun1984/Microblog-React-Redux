import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Switch, Route, Redirect } from "react-router-dom";
import NewBlog from "./NewBlog";
import EditBlog from "./EditBlog";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Blog from "./Blog";
import HomePage from "./HomePage";
import BlogContext from "./BlogContext";
import { Link } from "react-router-dom";

const App = () => {
	const [blogList, setBlogList] = useState([]);

	const addBlog = (blog) => {
		const newBlog = {
			...blog,
			id: uuid(),
		};
		setBlogList((blogs) => [...blogs, newBlog]);
		return newBlog;
	};

	const deleteBlog = (id) => {
		setBlogList(blogList.filter((blog) => blog.id !== id));
	};

	const editBlog = (id, editedBlog) => {
		const blogs = blogList.filter((blog) => blog.id !== id);
		setBlogList([...blogs, { id, ...editedBlog }]);
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
									<Blog deleteBlog={deleteBlog} />
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
