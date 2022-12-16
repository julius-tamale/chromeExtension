let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.getElementById('delete-btn');
const saveBtn = document.getElementById('save-btn');
const ulEl = document.getElementById('ul-el');

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render();
}

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
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

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear();
    myLeads = [];
    render();
})

saveBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function() {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render()
    })
})