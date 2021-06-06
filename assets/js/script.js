var currrentDay = $('#currentDay');
var timeblocks = $('#timeblocks');
// var rowclass = $('<div>').attr({
//     class:'row',
//     style: 'margin: 5px'
// });
var timediv = $('<div>').attr({
    class:"input-group mb-3 col-11"
});

for(var t =9;t<19;t++){
 timeblocks.append(`
 <div class="row" style="margin: 5px">
    <div id="time${t.toString()}" class="col-1" style="border: 1px solid black">
    </div>
    <div  class="input-group mb-3 col-10">
        <input id="text${t.toString()}" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2${t.toString()}">Button</button>
    </div>
</div>

`);
 }
 console.log($('#text9').val())

// // if(moment().hour<t) {}
// //     else if(moment().hour>t){ 
// //         // Make yellow
// //     }
// //     else{
// //         //Make green
// //     } */}

var now = moment();
$("#currentDay").text(now.format("hh:ss a"));
console.log(now.hour(),now.minute() )
// console.log(moment().isBefore('10:00','hour')); // true
console.log("what is happening")
var alertButtonEl=$('#button-addon29')
alertButtonEl.on('click', function () {
    for (let index = 9; index < 19; index++) {
        localStorage.setItem(index.toString(),$(`#text${index.toString()}`).val())
    }
  });



// Use moment to set Date, time and style input hour boxes using isAfter, isBefore
// color background
//     var timeblk =$('<div>').attr({
//         class:"col-1",
//         id: "tm"+t.toString(),
//         style :"border: 1px solid black"})

//     var texttimeblk = $('<input>').attr({
//         type:"text",
//         id: "txt"+t.toString(),
//         class:"form-control" ,
//         placeholder:"Things to Do" ,
//         ariaLabel:"Things to Do" ,
//         ariaDescribedby:"button-addon2",
//         style :"border: 1px solid black"});
    
//     var timebuttons =$('<button>').attr({
//         class: "btn btn-outline-secondary" ,
//         type:"button" ,
//         id:"button-addon2" + t.toString()
//     });
//     timediv.append(texttimeblk);
//     timediv.append(timebuttons);
//     timeblocks.append(timeblk);
//     timeblocks.append(timediv);
// }