const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        li.textContent = item;

        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete');
        li.appendChild(deleteBtn);
        list.appendChild(li);

        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            deleteChapter(li.textContext)
            input.focus();
        });

        input.value = "";
    
    input.focus();
};

function setChapterList() {
    localStorage.setItem('favchap', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('favchap'));
}

function deleteChapter(chapter) {
    chapter = chapter.replace('❌', '').trim();
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}