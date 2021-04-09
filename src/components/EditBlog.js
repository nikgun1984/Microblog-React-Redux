import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "./BlogContext";
import { useSelector } from "react-redux";

const EditBlog = ({ editBlog }) => {
	const { postid } = useParams();
	// const blogList = useContext(BlogContext);
	const blogList = useSelector((store) => store.blogs);
	console.log(blogList);
	const blog = blogList[postid];
	console.log(blog);
	const [formData, setFormData] = useState({
		title: blog.title,
		description: blog.description,
		body: blog.body,
	});
	const history = useHistory();

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		editBlog(postid, { comments: blog.comments, ...formData });
		console.log(formData);
		history.push(`/${postid}`);
	};
	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Group controlId="formTitle">
				<Form.Label>Title</Form.Label>
				<Form.Control
					type="text"
					name="title"
					onChange={handleOnChange}
					value={formData.title}
					required
				/>
			</Form.Group>

			<Form.Group controlId="formDescription">
				<Form.Label>Description</Form.Label>
				<Form.Control
					type="text"
					name="description"
					onChange={handleOnChange}
					value={formData.description}
					required
				/>
			</Form.Group>
			<Form.Group controlId="formBody">
				<Form.Label>Body</Form.Label>
				<Form.Control
					as="textarea"
					rows={5}
					name="body"
					onChange={handleOnChange}
					value={formData.body}
					required
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Edit Blog
			</Button>
			<Link to="/" variant="secondary" className="btn btn-secondary ml-3">
				Cancel
			</Link>
		</Form>
	);
};

export default EditBlog;
