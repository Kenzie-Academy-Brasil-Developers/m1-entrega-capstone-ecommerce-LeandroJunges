const main = document.querySelector("main");

const listaProdutos = document.querySelector(".container");
main.appendChild(listaProdutos);

function listarItens(listaItens){

    for(let i = 0; i<listaItens.length; i++){
        const item = listaItens[i];
        const cardProduto = criarCardProdutos(item);
        listaProdutos.appendChild(cardProduto);
    }

}
listarItens(data)

function adicionarCarrinho(idProduto){
    const produtoEncontrado = data.find(meuProduto => meuProduto.id == idProduto);
    
    divTotal.classList.add("soma");
    divResult.classList.add("soma")
    qtd.innerText = "Quantidade";
    total.innerText ="Total";
    const valor     = produtoEncontrado.value
    valorDaSoma.innerText = valor;
    
    const ul = document.querySelector(".carrinho");
    
    const li = document.createElement("li")
    li.classList.add("itensCarrinho")
    // li.value = produtoEncontrado.id

    const nome = document.createElement("h2");
    const nomeProduto   = produtoEncontrado.nameItem;
    
    nome.innerText      = nomeProduto;
    nome.classList.add("tituloProdutoCarrinho")
    
    const img =document.createElement("img")
    const imagem    = produtoEncontrado.img
    img.src = imagem;
    img.alt = nomeProduto;
    img.id = "imgCarrinho"

    const btnRemover = document.createElement("button");
    btnRemover.innerText = "X";
    btnRemover.classList.add("remove")
    btnRemover.value = `${produtoEncontrado.id}`
    
    const preco = document.createElement("p")
    preco.classList.add("pharagraphCar")
    preco.innerText = `R$ ${valor}.00`
    
    
    ul.appendChild(li);
    li.appendChild(img);
    li.appendChild(nome);
    li.appendChild(preco);
    li.appendChild(btnRemover);
    
    
    btnRemover.addEventListener("click", function(e){
        
        e.target.parentNode.remove()
       
        soma.innerText = contadora.length - 1;


    })
    let contadora = document.querySelectorAll(".carrinho li")
    
    soma.innerText = contadora.length;
   
}



function criarCardProdutos(produto){
    // recuperando informações do produto
    const id                = produto.id
    const imagem            = produto.img
    const nome              = produto.nameItem
    const descricao         = produto.description
    const valor             = produto.value
    const btnAddCarrinho    = produto.addCart
    const categoria         = produto.tag
    //criando elementos cardProdutos
    const tagLi     = document.createElement("li");
    const tagFigure = document.createElement("figure")
    const tagImg    = document.createElement("img");
    const tagPC     = document.createElement("p");
    const tagH2     = document.createElement("h2");
    const tagPD     = document.createElement("p");
    const tagPV     = document.createElement("p");
    const tagBtn    = document.createElement("button");
    //adcionar as informações dentro dos elementos
    tagImg.src = `../${imagem}`;
    tagImg.alt = nome;
    tagPC.innerText = categoria;
    tagH2.innerText = nome;
    tagPD.innerText = descricao;
    tagPV.innerHTML = `<strong>R$ ${valor},00 </strong>`;
    tagBtn.innerText = btnAddCarrinho
    tagLi.classList.add("card-camisa");
    tagPC.classList.add("categoria");
    tagBtn.classList.add("add");
    // montar o card 
    tagFigure.appendChild(tagImg);
    tagLi.appendChild(tagFigure);
    tagLi.appendChild(tagPC);
    tagLi.appendChild(tagH2);
    tagLi.appendChild(tagPD);
    tagLi.appendChild(tagPV);
    tagLi.appendChild(tagBtn);
   // retornar o card montado
   tagBtn.id = id
   tagBtn.setAttribute("onclick", "adicionarCarrinho("+id+")")
    return tagLi
}


const aside = document.createElement("aside");
aside.classList.add("lateral")


const input = document.createElement("input")
input.placeholder ="digite sua pesquisa aqui "

const btnPesquisar = document.createElement("button");
btnPesquisar.id ="pesquisa"
btnPesquisar.innerText = "pesquisar";

const ul = document.createElement("ul");
ul.classList.add("carrinho");

const subHeader = document.createElement("h2");
subHeader.classList.add("buy");
subHeader.innerText="Carrinho de Compras"

const divTotal = document.createElement("div");

const qtd = document.createElement("p");
// qtd.classList.add("textCarrinho");
const soma = document.createElement("p");
// soma.classList.add("textCarrinho");


const divResult = document.createElement("div");
const total = document.createElement("p");

const valorDaSoma = document.createElement("p");
valorDaSoma.classList.add("textCarrinho");

aside.appendChild(input);
aside.appendChild(btnPesquisar)
aside.appendChild(subHeader);
aside.appendChild(ul)
divTotal.appendChild(total);
divTotal.appendChild(valorDaSoma);
divResult.appendChild(qtd);
divResult.appendChild(soma);
aside.appendChild(divResult);
aside.appendChild(divTotal);
main.appendChild(aside)


