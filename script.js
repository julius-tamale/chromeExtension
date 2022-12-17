let myTrackedSites = []
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const saveTab = document.querySelector('#save-tab')
const deleteBtn = document.querySelector('#delete-btn');
let ulEl = document.querySelector('#ul-el')
const trackedSitesFromLocalStorage = JSON.parse(localStorage.getItem('myTrackedSites'))

//console.log(trackedSitesFromLocalStorage);
if(trackedSitesFromLocalStorage != null) {
    myTrackedSites = trackedSitesFromLocalStorage
    displayMyLinks()
}

inputBtn.addEventListener('click', function() {
    //console.log('Button works')
    myTrackedSites.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myTrackedSites', JSON.stringify(myTrackedSites))
    displayMyLinks()
    //console.log(localStorage.getItem('myTrackedSites'))
})

saveTab.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true})
    myTrackedSites.push(tabs[0].url)
    localStorage.setItem('myTrackedSites', JSON.stringify(myTrackedSites))
    displayMyLinks()
})
 
function displayMyLinks() {
    let linksList = '';
    for(let i = 0; i < myTrackedSites.length; i++) {
        linksList += `
            <li>
                <a href='${myTrackedSites[i]} target='blank'>
                    ${myTrackedSites[i]}
                </a>
            </li>`
    }
    ulEl.innerHTML = linksList
}

deleteBtn.addEventListener('dblclick', function() {
    //console.log('button works')
    localStorage.clear()
    myTrackedSites = []
    displayMyLinks();
})

//console.log(localStorage.getItem('myLink'))