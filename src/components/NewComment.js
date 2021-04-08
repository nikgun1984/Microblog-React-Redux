import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const NewBlog = ({ id, blog, addComment }) => {
	const [formData, setFormData] = useState({ comment: "" });

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		console.log(name);
		console.log(value);
		setFormData((fData) => ({
			...fData,
			[name]: value,
		}));
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		addComment(id, formData.comment, blog);
		setFormData({ comment: "" });
	};
	return (
		<Form onSubmit={handleOnSubmit}>
			<Form.Group controlId="formTitle">
				<Form.Control
					type="text"
					name="comment"
					onChange={handleOnChange}
					value={formData.comment}
					placeholder="New Comment"
					required
				/>
			</Form.Group>
			<Button variant="primary" type="submit">
				Add
			</Button>
		</Form>
	);
};

export default NewBlog;
