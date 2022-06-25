import generateWord from './generateWord';
import './styles/main.scss';

import dict from './assets/dict.svg'

document.getElementById("dictImg").src = dict;

const wordBtn = document.getElementById('wordBtn');
wordBtn.addEventListener('click', generateWord)
generateWord();