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
			const { id } = action.blog;
			delete action.blog.id;
			return {
				...state,
				blogs: { ...state.blogs, [id]: { ...action.blog } },
			};
		default:
			return state;
	}
}
