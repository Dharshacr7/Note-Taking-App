
// Setting Up The Note Container
document.addEventListener("DOMContentLoaded", function() {

    // Setting The Query and Add Button

    const userQuery = document.getElementById('query');
    const addBtn = document.getElementById('addBtn');


    addBtn.addEventListener('click', (e) => {

        e.preventDefault();
        const queryValue = userQuery.value;
        if (!queryValue) {
            alert("Please Enter Something")
        }
        else{
            // Selecting the main element
            const main = document.getElementById('main');

            // Creating Elements
            const notes = document.createElement('div');
            const noteHead = document.createElement('div');
            const noteHead1 = document.createElement('p');
            const editbutton = document.createElement('button');
            const deleteButton = document.createElement('button')
            const noteText = document.createElement('p')

            // Setting Attributes
            notes.setAttribute('class','notes');
            noteHead.setAttribute('class','note-head');
            noteText.setAttribute('id','note-text')
            deleteButton.setAttribute('id','delBtn')


            //Setting button text
            deleteButton.textContent = "Delete"


            // Setting Note-text name
            noteText.textContent = queryValue;

            // Appending Elements
            main.appendChild(notes);
            notes.appendChild(noteHead);
            notes.appendChild(noteText)
            noteHead.appendChild(deleteButton)

            const remove = document.getElementById('delBtn');
            remove.addEventListener('click', (e) => {
                main.removeChild(notes);
            })
        }
    })
});

