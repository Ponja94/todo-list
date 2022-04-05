var listItem =[]; /* Lista de itens BD*/

var enter = document.getElementById('writedText');
var elementl = document.getElementById('toDoList');
var btnAdd = document.getElementById('btnAdd');

btnAdd.addEventListener('click', addNewItem)
enter.addEventListener('keypress', addNewItem);
elementl.addEventListener('click', excludeItem);


/* Add a new item on list */
function addNewItem(){ 
	const tecla = event.key;
	const mouse = event.button;

	if(tecla == 'Enter' || mouse == '0'){
		let itemWrited = document.getElementById('writedText').value;
		let listDataToWriteInContainer = '';


		listItem.push(itemWrited);


		for(i in listItem){

			let newItem = listItem[i];


			listDataToWriteInContainer += `<div class="container input-group d-inline"">
              <div class="row input-group-prepend mr-5"> <!-- -->
                <div class="col form-check input-group-text justify-content-between">

                  <input class="float-left" type="checkbox" id="flexCheck">
                  
                  <label class="form-check-label text-center" for="flexCheck" id="itemContent">${newItem}</label>

                  <i class="btn fa-solid fa-trash-can" id="${i}"></i>
                </div>
              </div>
            </div>`;
		}
		event.target.value=""; /* Limpa o valor digitado anteriormente*/
		document.getElementById('toDoList').innerHTML = listDataToWriteInContainer;
	}
}

/* Exclude item from list */


function excludeItem(){

	const elemento = event.target;
	const i = elemento.id; 
	const classesElemento = elemento.classList;

	const toVerify = document.querySelector('i');
	const classesVerif = toVerify.classList;
	

	if(classesElemento[1] == classesVerif[1]){
		listItem.splice(i,1);
		atualizar();

	}else{
		console.log('erro')
	}
}

function atualizar(){
	
	let listDataToWriteInContainer = '';
	for(i in listItem){
		let newItem = listItem[i];
		listDataToWriteInContainer += `<div class="container input-group d-inline"">
              <div class="row input-group-prepend mr-5"> <!-- -->
                <div class="col form-check input-group-text justify-content-between">

                  <input class="float-left" type="checkbox" id="flexCheck">
                  
                  <label class="form-check-label text-center" for="flexCheck" id="itemContent">${newItem}</label>

                  <i class="btn fa-solid fa-trash-can" id="${i}"></i>
                </div>
              </div>
            </div>`;
	}

	document.getElementById('toDoList').innerHTML = listDataToWriteInContainer;


}

