var listItem =["1", "2","3"]; /* Lista de itens BD*/

/* Add a new item on list */
function addNewItem(){ 
	let itemWrited = document.getElementById('writedText').value;
	let listReadedDataBase = '';

	for(i in listItem){

		let newItem = listItem[i];

		

		listReadedDataBase += `		<li class="d-flex justify-content-between align-items-baseline pt-1 mb-2">
		<input class="form-check-input" type="checkbox" value="" id="flexCheck">
		<label class="form-check-label" for="flexCheck" id="itemContent">${newItem}</label>
		<i class="btn fa-solid fa-trash-can" onclick="excludeItem()"></i>
		</li>`;
	}

	document.getElementById('toDoList').innerHTML = listReadedDataBase;
}

/* Exclude item from list */

function excludeItem(){

	alert('foi');


}

