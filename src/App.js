// bootstrap React
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
// react libs
import { v4 as uuid } from "uuid";
import BlogContext from "./components/BlogContext";
import { Link, Switch, Route, Redirect } from "react-router-dom";
// components
import HomePage from "./components/HomePage";
import Blog from "./components/Blog";
import NewBlog from "./components/NewBlog";
import EditBlog from "./components/EditBlog";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addBlog, deleteBlog } from "./actions";

const App = () => {
	const blogList = useSelector((store) => store.blogs);
	const dispatch = useDispatch();
	const addNewBlog = (blog) => {
		const id = uuid();
		const newBlog = {
			[id]: {
				...blog,
				comments: {},
			},
		};
		dispatch(addBlog(newBlog));
		return id;
	};

	const delBlog = (id) => {
		dispatch(deleteBlog(id));
	};

	const edBlog = (id, blog) => {
		const editedBlog = {
			[id]: {
				...blog,
			},
		};
		dispatch(addBlog(editedBlog));
	};

	const addNewComment = (postid, comment, blog) => {
		const id = uuid();
		const editedBlog = {
			[postid]: {
				...blog,
				comments: {
					...blog.comments,
					[id]: comment,
				},
			},
		};
		dispatch(addBlog(editedBlog));
	};

	const deleteComment = (id, blog, commentId) => {
		const blogs = blogList.filter((blog) => blog.id !== id);
		//
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
									<NewBlog addBlog={addNewBlog} />
								</Route>
								<Route exact path="/:postid/edit">
									<EditBlog editBlog={edBlog} />
								</Route>
								<Route exact path="/:postid">
									<Blog
										deleteBlog={delBlog}
										addComment={addNewComment}
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
