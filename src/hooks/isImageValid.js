const types = ["image/png", "image/jpg", "image/jpeg", "image/webp"];

const isImageValid = (image) => {
    if (!image) {
        return false;
    }

    if (!types.includes(image?.type)) {
        return false;
    }

    return true;
};

export default isImageValid;
