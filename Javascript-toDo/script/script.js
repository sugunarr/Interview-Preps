(function(){

	//Create a list from array
	var list = [];

	var getUL = document.getElementById('myUL');
	function createList() {
		for(var i=0; i<list.length; i++){
			var createLI = document.createElement('li');
			var liChild = document.createTextNode(list[i]);
			createLI.appendChild(liChild);
			getUL.appendChild(createLI);
		}
	}
	
	//Create a close button to the lists
	function createClose(){	
		var getLI = document.getElementsByTagName('li');
		for(var i = 0; i < getLI.length; i++){
			var createSpan = document.createElement('span');
			var spanChild = document.createTextNode('\u00D7');
			createSpan.classList.add('close');
			createSpan.appendChild(spanChild);
			getLI[i].appendChild(createSpan);
		}	
	}

	//Delete a list on click of that list's delete button
	function deleteList(){
		var getClose = document.getElementsByClassName('close');
		for(var i=0; i<getClose.length; i++){
			getClose[i].onclick = function(){
				var getParent = this.parentElement;
				var gtLiText = getParent.innerText.slice(0, -1); // Slice of last character which is 'x'
				var arrIndex = list.indexOf(gtLiText);
				if(arrIndex >= 0){
					list.splice(arrIndex, 1);
				}
				getParent.remove();
			}
		}
	}

	//Add a "tick" when the list clicked
	document.querySelector('ul').addEventListener('click', function(e){
		if(e.target.tagName === 'LI'){
			e.target.classList.toggle('checked');
		}
	}, false);

	//Create a new list item when clicking add button
	var getAddButton = document.getElementById('addElement');
	getAddButton.addEventListener('click', function(){
		//alert("Listener loaded!!");
		var inputValue = document.getElementById("myInput");
		if(inputValue.value !== ""){			
			list.push(inputValue.value);
			inputValue.value = '';
		}
		console.log("Lists: ", list);
		//Updating UL with its array data
		while (getUL.hasChildNodes()) {
	        getUL.removeChild(getUL.firstChild);
	    }
		createList();
		createClose();
		deleteList();

	}, false);
})();