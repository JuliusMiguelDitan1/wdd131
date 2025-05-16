const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Make sure your UL has id="list"

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = 'X';
        li.append(deleteButton);
        list.append(li);

        // Delete item when button is clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear the input field and refocus
        input.value = '';
        input.focus();
    }
});
