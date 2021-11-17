import './styles.css';


const addEntryButton = document.getElementById('addButton');
const entryList = document.getElementById('entryList');

addEntryButton.addEventListener('click', () =>{
    console.log('event fired');
    entryList.appendChild(createEntryInput());
})

function createEntryInput(){
    let entryInput = document.createElement('li');
    entryInput.classList.add('entry');
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
    submitButton.addEventListener('click',()=>{
        console.log(inTimeInput.value);
        console.log(outTimeInput.value)
    })

    entryInput.append(daySelector,inTimeInput,outTimeInput,submitButton);


    
    return entryInput;
}



function calculateHours(timeSheet){
    timeSheet.days.forEach((day)=>{
        let dayTotalHours = 0;
        day.timeEntries.forEach((timeEntry)=>{
            let inHours = timeEntry.inTime.split(':')[0];
            let inMinutes = timeEntry.inTime.split(':')[1];

            let outHours = timeEntry.outTime.split(':')[0];
            let outMinutes = timeEntry.outTime.split(':')[1];

            let entryTotal = (outHours-inHours)+((outMinutes-inMinutes)/60);

        })
    })

}

//example JSON sheet:
let timeSheet = {
    days: [
        {
            day: "Wednesday",
            timeEntries: [
                {inTime:'12:00', outTime:'18:00', entryTotalHours: '6'},
                {inTime:'18:30', outTime:'20:00',entryTotalHours: '2.5'}
            ],
            dayTotalHours:'8.5'
        },
        {
            day: "Thursday",
            timeEntries: [
                {inTime:'3', outTime:'9',entryTotalHours:'6'},
            ],
            dayTotalHours:'6'

        }
    ],
    totalHours: "14.5",

    
}



