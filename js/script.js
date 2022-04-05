var listItem =[]; /* Lista de itens BD*/

/* Add a new item on list */
function addNewItem(){ 
	let itemWrited = document.getElementById('writedText').value;
	let listDataToWriteInContainer = '';

	listItem.push(itemWrited);

	for(i in listItem){

		let newItem = listItem[i];


		listDataToWriteInContainer += `<div class="container input-group d-inline">
              <div class="row input-group-prepend mr-5"> <!-- -->
                <div class="col form-check input-group-text  justify-content-between">

                  <input class="float-left" type="checkbox" name="" id="flexCheck">
                  
                  <label class="form-check-label text-center" for="flexCheck" id="itemContent">${newItem}</label>

                  <i class="btn fa-solid fa-trash-can" onclick="excludeItem()"></i>
                </div>
              </div> <!-- -->
            </div>`;
	}

	document.getElementById('toDoList').innerHTML = listDataToWriteInContainer;
}

/* Exclude item from list */

function excludeItem(){

	let toGetPositionList = document.getElementById('itemContent').value;

	alert(toGetPositionList)
	alert('foi');

}

function comlpetedItem(){

	alert('foi222');


}

