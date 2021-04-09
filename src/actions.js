import { ADD_BLOG, DELETE_BLOG, DELETE_COMMENT } from "./actionTypes";

export function addBlog(blog) {
	return {
		type: ADD_BLOG,
		blog: blog,
	};
}

export function deleteBlog(id) {
	console.log("ID is " + id);
	return {
		type: DELETE_BLOG,
		id: id,
	};
}
