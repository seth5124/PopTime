
const addEntryButton = document.getElementById('addButton');
const entryList = document.getElementById('entryList');

addEntryButton.addEventListener('click', () =>{
    entryList.appendChild(createEntryInput());
})

class Entry{

}

function createEntryInput(){
    let newEntry = document.createElement('li');
    newEntry.classList.add('entry');
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

    newEntry.appendChild(daySelector);
    newEntry.appendChild(inTimeInput);
    newEntry.appendChild(outTimeInput);
    newEntry.appendChild(submitButton);

    return newEntry;
}

function calculateHours(timeSheet){
    timeSheet.forEach((day)=>{
        let dayTotalHours = 0;
        day.timeEntries.forEach((timeEntry)=>{
            //subtract inTime from outTime. Add hours to dayTotalHours
        })
    })

}


// // Objectives:
// //     1. Create new time sheet
// //         a. open new entry dialog
// //         b. Fill out entry and add it to the sheet
// //     2. Calculate hours worked
//        3. generate time sheet based on hours worked, pay rate and tax rate.  

//example JSON sheet:
let timeSheet = {
    days: [
        {
            day: "Wednesday",
            timeEntries: [
                {inTime:'12', outTime:'6'},
                {inTime:'6:30', outTime:'9'}
            ]
        },
        {
            day: "Thursday",
            timeEntries: [
                {inTime:'3', outTime:'9'},
            ]
        }
    ]
    
}



