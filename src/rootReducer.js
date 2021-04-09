import {
	ADD_BLOG,
	DELETE_BLOG,
	EDIT_BLOG,
	ADD_COMMENT,
	DELETE_COMMENT,
} from "./actionTypes";
const INITIAL_STATE = { blogs: {} };
export default function posts(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_BLOG:
			console.log(action.blog);
			return {
				...state,
				blogs: { ...state.blogs, ...action.blog },
			};
		case DELETE_BLOG:
			return {
				...state,
				blogs: {
					...Object.keys(state.blogs)
						.filter((id) => id !== action.id)
						.reduce((obj, key) => {
							return {
								...obj,
								[key]: state.blogs[key],
							};
						}, {}),
				},
			};
		case EDIT_BLOG:
			return {
				...state,
				blogs: {
					...state.blogs,
					...action.editedBlog,
				},
			};
		default:
			return state;
	}
}
