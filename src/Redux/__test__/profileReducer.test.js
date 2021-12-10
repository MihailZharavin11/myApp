import profileReducer, { addPost,deletePost } from '../profileReducer';


let initialState = {
    postsData: [{
        id: 1,
        message: 'Hi, how are u?',
        likes: 20
    }, {
        id: 2,
        message: "It's my first post",
        likes: 30
    }],
};

test('lenght post shold be increment', () => {
    let action = addPost('Hello');
    let newState = profileReducer(initialState,action);

    expect(newState.postsData.length).toBe(3);
  });

  test('should be equals added message', () => {
    let action = addPost('Hello');
    let newState = profileReducer(initialState,action);

    expect(newState.postsData[2].message).toBe('Hello');
  });


  test('after delete length of message should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(initialState,action);

    expect(newState.postsData.length).toBe(1);
  });
