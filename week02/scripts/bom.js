const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        deleteBtn.setAttribute('aria-label', `Remove ${input.value}`);

        li.appendChild(deleteBtn);
        list.appendChild(li);

        input.value = "";
    }
    input.focus();
});