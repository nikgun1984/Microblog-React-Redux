import {
	ADD_BLOG,
	DELETE_BLOG,
	EDIT_BLOG,
	ADD_COMMENT,
	DELETE_COMMENT,
} from "./actionTypes";

export function addBlog(id, newBlog) {
	return {
		type: ADD_BLOG,
		blog: newBlog,
	};
}

export function deleteBlog(id) {
	console.log("ID is " + id);
	return {
		type: DELETE_BLOG,
		id: id,
	};
}

export function editBlog(editedBlog) {
	console.log("Edited Blog: " + editedBlog);
	return {
		type: ADD_BLOG,
		blog: editedBlog,
	};
}
