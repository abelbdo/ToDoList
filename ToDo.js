var inputValue = document.querySelector('.input');
const container = document.querySelector('.container');
const add = document.querySelector('.add');

class item {
    constructor(name) {
        this.createItem(name);
    }

    createItem(name) {
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        //criando input que vai ser recebido pelo itembox e passadas suas caracteristicas.
        var input = document.createElement('input');
        input.type = "text";
        input.value = name;
        input.disabled = true;
        input.classList.add('item_input');

        //criando o botão Edit que irá aparecer junto com os inputs no itemBox
        var done = document.createElement('button');
        done.classList.add('done');
        done.innerHTML = "Done!";
        //adicionar o evento de ativação desse botão done
        done.addEventListener('click', () => this.done(input, name));


        //criando o botão remove que irá aparecer junto aos inputs no itemBox
        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "Remove";
        //adiciona o evento de ativação do remove
        remove.addEventListener('click', () => this.remove(itemBox, name));


        //adicionando as funcionalidade aos elementos pai
        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(done);
        itemBox.appendChild(remove);

    }
    //adicionar evento do click add (não podemos colocar função onclick no html)
    //função done que sera chamada com o click 
    done(input, name){
          input.style.textDecoration = "line-through";
    };
    
    //criando funação remove
    //para remover o item no itembox, tem que remover o nó que o filho representa
    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
    };
}


add.addEventListener('click', check);
function check() {
    if (inputValue.value != "") {
        new item(inputValue.value)
        inputValue.value = ""
    }

};

