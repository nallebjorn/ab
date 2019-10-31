export default (text, setText, duration = 200) => {
    let temp = [...text];
    let counter = 0;
    let newTitle = "";
    let i = setInterval(() => {
        newTitle += temp[counter];
        setText(newTitle);
        counter++;
        if (counter === temp.length) {
            clearInterval(i);
        }
    }, duration);
    return i;
};
