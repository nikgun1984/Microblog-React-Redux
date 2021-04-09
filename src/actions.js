import {
	ADD_BLOG,
	DELETE_BLOG,
	EDIT_BLOG,
	ADD_COMMENT,
	DELETE_COMMENT,
} from "./actionTypes";
import { v4 as uuid } from "uuid";

export function addBlog(blog) {
	const newBlog = {
		...blog,
		comments: [],
		id: uuid(),
	};
	return {
		type: ADD_BLOG,
		blog: newBlog,
	};
}
