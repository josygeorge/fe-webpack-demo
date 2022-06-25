import Axios from 'axios';

function generateWord() {
    /* const word = "jubiliant"
    return word; */
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    Axios.get('https://random-word-api.herokuapp.com/word', config)
        .then(res => {
            document.getElementById('word').innerHTML = res.data
        })
        ;
}

export default generateWord;