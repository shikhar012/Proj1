let addbtn = document.getElementById('addbtn');
shownotes();
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` <div class="my-3 mx-2 card" style="width: 18rem;">
            <div class="card-body">
      <h5 class="card-title">note ${index+1}</h5>
      <p class="card-text">${element}</p>
      <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">delete note</button>
    </div>
  </div> `;
    });
    let noteselm=document.getElementById('notes');
    if(notesobj.length!=0)
    {
        noteselm.innerHTML=html;
    }
    else
    {
        noteselm.innerHTML=`nothing to show`;
    }
}

function deletenote(index)
{
    console.log("i am delete",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}