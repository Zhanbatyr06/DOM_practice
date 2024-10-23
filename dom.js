const paragraph = document.getElementById('text');
const words = paragraph.innerText.split();

paragraph.innerHTML = words.map(word => {
    return word.length > 8 ? `
    <span class = "highlight">${word}</span>
    ` : word;
}).join(' ');

const sourceLink = document.createElement('a');
sourceLink.href = 'https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html';
sourceLink.textContent = 'Source';
paragraph.insertAdjacentElement('afterend', sourceLink);


const sentences = paragraph.innerHTML.split();
paragraph.innerHTML = sentences.map( sentence => sentence.trim() + '.').join('<br>');

const wordCount = words.length;
const wordCountDiv = document.getElementById('wordCount');
wordCountDiv.textContent = `Word Count: ${wordCount}`;

paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '🤔]').replace(/\!/g, '😲');
