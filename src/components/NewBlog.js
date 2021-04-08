import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const NewBlog = ({ addBlog }) => {
	const INITIAL_DATA = {
		title: "",
		description: "",
		body: "",
	};
	const [formData, setFormData] = useState(INITIAL_DATA);
	const history = useHistory();

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		console.log(name);
		console.log(value);
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
		console.log(formData);
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		const newBlog = addBlog(formData);
		console.log(formData);
		setFormData(INITIAL_DATA);
		history.push(`/${newBlog.id}`);
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
				Submit
			</Button>
			<Link to="/" variant="secondary" className="btn btn-secondary ml-3">
				Cancel
			</Link>
		</Form>
	);
};

export default NewBlog;
