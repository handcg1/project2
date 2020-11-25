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
        .then(images => {
            dispatch(loadImages(images));
        });
    };
}