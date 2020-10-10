const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
const add = document.querySelector('.add');


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){

		//criando elemento div e armazenado na variavel itemBox
		//em seguida, adicionada a variavel em uma classe item
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "Edit";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "Remove";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

		//div criada no html vai receber os elementos de itemBox
    	container.appendChild(itemBox);

		//itemBox por sua vez recebe os elementos input, edit e remove
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(remove);

	}
	
	// ao acionar a função edit com o button criado e adicionado ao itemBox: se o texto do input tiver disable, ao utilizar a função ele deixará de estar (podendo ser editado) e vice versa.
    edit(input, name){
        if(input.disabled == true){
           input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
        }
    }

	//ao acionar a função remove com o button criado e adicionado ao itemBox: revove do itemBox o valor referente ao nó em questão.
    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
    }
}
//adiciona evento que ativa ao click e chama a função check
add.addEventListener('click', check);
//a função está verificando se algo foi digitado no campo e se for constatado, ela cria um novo item com o valor digitado.
//após isso, o campo é setado como vazio novamente.
function check(){
	if(inputValue.value != ""){
		new item(inputValue.value);
		inputValue.value = "";
	}
}