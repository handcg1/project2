export const Action = Object.freeze({
    LoadPosts: 'LoadPosts',
});

export function loadPosts(posts) {
    return {
        type: Action.LoadPosts,
        payload: posts,
    };
}

const host = "https://proj2-api.callanhand.me:8442";

export function fetchPosts() {
    return dispatch => {
        fetch(`${host}/load-posts`)
            .then(response => response.json())
            .then(data => {
                dispatch(loadPosts(data.post));
            });
    };
}

export function uploadPost(image, username, caption) {

    const formData = new FormData();
    formData.append('image', image);
    formData.append('username', username);
    formData.append('caption', caption);

    const options = {
        method: 'POST',
        body: formData,
    };

    return dispatch => {
        fetch(`${host}/upload-post`, options)
            .then(response => response.text())
            .then(data => {
                dispatch(fetchPosts());
            });
    };
}
