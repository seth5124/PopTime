
const addEntryButton = document.getElementById('addButton');
const entryList = document.getElementById('entryList');

addEntryButton.addEventListener('click', () =>{
    entryList.appendChild(createBlankDayEntry());
})


function createBlankDayEntry(){
    let entry = document.createElement('li');
    entry.classList.add('entry');
    let daySelector = document.createElement('select');
    daySelector.setAttribute('name','days');
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    days.forEach((day)=>{
        let option = document.createElement('option');
        option.setAttribute('value', day);
        option.innerHTML = day;
        daySelector.appendChild(option);
    });
    let inTimeInput = document.createElement('input');
    inTimeInput.setAttribute('type','time');
    let outTimeInput = document.createElement('input');
    outTimeInput.setAttribute('type','time');
    let submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');
    submitButton.innerHTML = 'Add';

    entry.appendChild(daySelector);
    entry.appendChild(inTimeInput);
    entry.appendChild(outTimeInput);
    entry.appendChild(submitButton);
    return entry;
}

function createTimeSheet(entries){
    

}
