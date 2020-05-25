import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {posts: [{id: 0, message: "2", likeCount: 2}]};

test('length of posts should be incremented', () => {
    let action = addPost('Hello guys');

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);
});

test('length of posts should be decremented', () => {
    let action = deletePost(0);

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1);
});
