var currrentDay = $('#currentDay');
var timeblocks = $('#timeblocks');
var now = moment();
var clor;

// btn-outline-secondary
// Load timeblocks in military time from 9:00  to 18:00
// Colorcode background colors to show past, present and future

for(var t =9;t<19;t++){
    if(moment().hour() < t){
        console.log(t,moment())
        clor= '#77dd77';
    }
    else if(moment().hour() > t){
        clor= '#d3d3d3';
    }
    else {
        clor='#ff6961';
    }
    console.log(moment().hour(),t,moment().hour() === t)
    timeblocks.append(`
    <div class="row" style="margin: 5px">
        <span id="time${t.toString()}" class="col-1 time-block hour" style="border: 1px solid black" >
        ${moment(t.toString(),"hh").format("ha")}</span>
        <div  class="input-group mb-3 col-10">
            <textarea id="text${t.toString()}" style="background-color : ${clor}; color:white" type="text" class="form-control" placeholder="ToDo" aria-label="ToDo" aria-describedby="button-addon2" rows="3"></textarea>
            <button class="saveBtn " type="button" id="button-addon2${t.toString()}">Update</button>
        </div>
    </div>
    `);
 }

 
// Set date with moment formatting
$("#currentDay").text(now.format("dddd, MMMM D, YYYY"));

// Sets alert on all timeblock buttons through class
var alertButtonEl=$('.input-group')
alertButtonEl.on('click', function () {
    for (let index = 9; index < 19; index++) {
        localStorage.setItem(index.toString(),$(`#text${index.toString()}`).val())
    }
  });

//   Loads ToDo's from localStorage in each timeblock
  for (let index = 0; index < 19; index++) {
    $(`#text${index.toString()}`).val(localStorage.getItem(index.toString()));
  }

//   Look at adding a function which automatically reloads page 1 minute after the hour.
