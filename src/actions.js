export const Action = Object.freeze({
    LoadImages: 'LoadImages',
});

export function loadImages(images) {
    return {
        type: Action.LoadImages,
        payload: images,
    };
}

const host = "http://proj2-api.callanhand.me:3443";

export function fetchImages() {
    return dispatch => {
        fetch(`${host}/images`)
            .then(response => response.json())
            .then(data => {
                dispatch(loadImages(data.names));
            });
    };
}

export function uploadImage(image, username, caption) {

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
                console.log(data);
                dispatch(fetchImages());
            });
    };
}

setInterval(uploadImage, 60000);