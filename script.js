let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
//const deleteBtn = document.getElementById('delete-btn');
const saveBtn = document.getElementById('save-btn');
const ulEl = document.getElementById('ul-el');

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    render();
})

function render() {
    let myLeadsLinks = '';
    for(let i = 0; i < myLeads.length; i++) {
        myLeadsLinks += `
                        <li>
                            <a href='${myLeads[i]}' target='_blank'>
                                ${myLeads[i]}
                            </a>
                        </li>`;
    }
    ulEl.innerHTML = myLeadsLinks;
}