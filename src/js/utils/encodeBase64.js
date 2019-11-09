const encode = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(/,(.+)/.exec(reader.result)[1]);
        reader.onerror = error => reject(error);
    });

const toBase64 = async file => {
    return await encode(file);
};

export default toBase64;