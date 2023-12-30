const inputBox = document.getElementById('input-box');

const listContainer = document.getElementById('list-container');

const inputreset = document.getElementById('btn-reset');

function addTask(){
    if(inputBox.value === ''){
        alert('you must write task.')
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();

inputreset.addEventListener(
    "click",
    function(){
        if (listContainer) {
            // Iterate through each list item (li) within the list
            list.querySelectorAll('li').forEach((item, index) => {
              // Set the new item number as a string with leading zero if needed
              item.textContent = `0${index + 1}. `;
        
              // If it's an ordered list (ol), also reset the counter attribute
              if (list.tagName === 'OL') {
                item.setAttribute('value', index + 1);
              }
            });
          } else {
            console.error(`List with ID "${listId}" not found.`);
          }
    }
);
