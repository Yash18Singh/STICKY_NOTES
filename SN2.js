var container2 = document.getElementsByClassName('container2')[0];
var container3 = document.getElementsByClassName('container3')[0];

var checkIcon = document.getElementById('check-icon');
var xIcon = document.getElementById('x-icon');


showNotes();


// CLOSE THE TEXTBOX
xIcon.addEventListener('click', function(){
    typeNote();
});

function typeNote(){
    if(container3.style.display=='none')
    {
        container3.style.display='block';
    }
    else 
    {
        container3.style.display = 'none';
    }
}


checkIcon.addEventListener('click', function(e){
    let addTxt = document.getElementById('note-text');
    let notes = localStorage.getItem('notes');

    if(notes==null)
    {
        notesObj=[];
    }
    else 
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    console.log(notesObj);

    showNotes();
    emptyTEXTBOX();
});


function showNotes()
{
    let notes = localStorage.getItem('notes');

    if(notes==null)
    {
        notesObj=[];
    }
    else 
    {
        notesObj = JSON.parse(notes);
    }
                     
    
    let STICKY_NOTE = "";
    //notesObj.forEach(function(element,index){
    //    STICKY_NOTE+= `
    //        <div class='StickyCard ' id='sticky-card' ondblclick='deleteNote();'>
    //            <h1 class='card-heading'>NOTE ${index +1}</h1>
    //            <p class='card-text'>${element}</p>
    //        </div>
    //    `;
    //});

    const date = new Date()
    const date_string = date.toLocaleString();

    notesObj.forEach(function(element,index){
        if((index+1)%6==0)
        {
            STICKY_NOTE+=`
            <div class='StickyCard StickyCardDesign1' id='sticky-card'>
                <h1 class='card-heading'>NOTE ${index +1}</h1>
                <h5 class='card-date'></h5>
                <svg id='note-remove' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                <hr>
                <p class='card-text'>${element}</p>
            </div>
            `;
        }

        else if((index+1)%6==1)
        {
            STICKY_NOTE+=`
            <div class='StickyCard StickyCardDesign2' id='sticky-card'>
                <h1 class='card-heading'>NOTE ${index +1}</h1>
                <svg id='note-remove' onclick='deleteNote();' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                <hr>
                <p class='card-text'>${element}</p>
            </div>
            `;
        }

        else if((index+1)%6==2)
        {
            STICKY_NOTE+=`
            <div class='StickyCard StickyCardDesign3' id='sticky-card'>
                <h1 class='card-heading'>NOTE ${index +1}</h1>
                <svg id='note-remove' onclick='deleteNote();' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                <hr>
                <p class='card-text'>${element}</p>
            </div>
            `;
        }

        else if((index+1)%6==3)
        {
            STICKY_NOTE+=`
            <div class='StickyCard StickyCardDesign4' id='sticky-card'>
                <h1 class='card-heading'>NOTE ${index +1}</h1>
                <svg id='note-remove' onclick='deleteNote();' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                <hr>
                <p class='card-text'>${element}</p>
            </div>
            `;
        }

        else if((index+1)%6==4)
        {
            STICKY_NOTE+=`
            <div class='StickyCard StickyCardDesign5' id='sticky-card'>
                <h1 class='card-heading'>NOTE ${index +1}</h1>
                <svg id='note-remove' onclick='deleteNote();' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                <hr>
                <p class='card-text'>${element}</p>
            </div>
            `;
        }

        else
        {
            STICKY_NOTE+=`
            <div class='StickyCard StickyCardDesign6' id='sticky-card'>
                <h1 class='card-heading'>NOTE ${index +1}</h1>
                <svg id='note-remove' onclick='deleteNote();' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                <hr>
                <p class='card-text'>${element}</p>
            </div>
            `;
        }
    });


    let notesElm = document.getElementById('notes');

    if(notesObj.length != 0)
    {
        notesElm.innerHTML = STICKY_NOTE;
    }
    else
    {
        notesElm.innerHTML = 'No Sticky notes right now. You can create some.';
    }

    emptyTEXTBOX();
}


function deleteNote(index){
    let notes = localStorage.getItem('notes');
    if(notes==null)
    {
        notesObj=[];
    }
    else 
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}



function emptyTEXTBOX()
{
    let textarea = document.getElementById('note-text');
    textarea.value = "";
}



