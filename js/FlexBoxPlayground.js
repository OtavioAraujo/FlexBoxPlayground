$(document).ready(function () {
    addItemFlex();
    addItemFlex();
    addItemFlex();
    controlesItensAbas.find("button:first-child").addClass("active");
    preencherCampos(indexAtual);
});

/*-------------------------------------------------------*\
    variaveis
\*-------------------------------------------------------*/

var indexUltimo = -1;
var indexAtual = 0;

/*-------------------------------------------------------*\
    elementos
\*-------------------------------------------------------*/

var controlesItensAbas = $(".controles-itens__abas")
var containerFlex = document.getElementById("container-flex");
var itensFlex = [];

//code
var codeFlexGrow = $("#code-flex-grow");
var codeFlexShrink = $("#code-flex-shrink");
var codeFlexBasis = $("#code-flex-basis");

var codeFlexDirection = $("#code-flex-direction");
var codeFlexWrap = $("#code-flex-wrap");


//Campos do item
var campoOrder = $("#campo-order");
var campoFlexGrow = $("#campo-flex-grow");
var campoFlexShrink = $("#campo-flex-shrink");
var campoFlexBasis = $("#campo-flex-basis");
var campoConteudo = $("#campo-conteudo");
var campoWidth = $("#campo-width");
var campoHeight = $("#campo-height");
var campoPadding = $("#campo-padding");
var campoMargin = $("#campo-margin");

/*-------------------------------------------------------*\ 
    Eventos
\*-------------------------------------------------------*/

campoOrder.keyup((e) => {
    itensFlex[indexAtual].css("order", campoOrder.val());
});

campoFlexGrow.keyup((e) => {
    itensFlex[indexAtual].css("flex-grow", campoFlexGrow.val());
    codeFlexGrow.html(campoFlexGrow.val() ? campoFlexGrow.val() : 0);
});

campoFlexShrink.keyup((e) => {
    itensFlex[indexAtual].css("flex-shrink", campoFlexShrink.val());
    codeFlexShrink.html(campoFlexShrink.val() ? campoFlexShrink.val() : 1);
});

campoFlexBasis.keyup((e) => {
    itensFlex[indexAtual].css("flex-basis", campoFlexBasis.val());
    codeFlexBasis.html(campoFlexBasis.val() ? campoFlexBasis.val() : "auto");
});

campoConteudo.keyup((e) => {
    itensFlex[indexAtual].html(campoConteudo.val());
});

campoWidth.keyup((e) => {
    itensFlex[indexAtual].css("width", campoWidth.val());
});

campoHeight.keyup((e) => {
    itensFlex[indexAtual].css("height", campoHeight.val());
});

campoPadding.keyup((e) => {
    itensFlex[indexAtual].css("padding", campoPadding.val());
});

campoMargin.keyup((e) => {
    itensFlex[indexAtual].css("margin", campoMargin.val());
});



/*-------------------------------------------------------*\
    botoes
\*-------------------------------------------------------*/

function btnFlexDirection(botao) {
    for (let e of document.getElementsByClassName("flex-direction")) {
        e.style.color = "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color = "#71c558";
    botao.style.fontWeight = "700";

    codeFlexDirection.html(botao.textContent.replace(" (default)", ""))

    containerFlex.style.flexDirection = botao.textContent.replace(" (default)", "");
};

function btnFlexWrap(botao) {
    for (let e of document.getElementsByClassName("flex-wrap")) {
        e.style.color = "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color = "#71c558";
    botao.style.fontWeight = "700";

    codeFlexWrap.html(botao.textContent.replace(" (default)", ""))

    containerFlex.style.flexWrap = botao.textContent.replace(" (default)", "");
};

function btnJustifyContent(botao) {
    for (let e of document.getElementsByClassName("justify-content")) {
        e.style.color = "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color = "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.justifyContent = botao.textContent.replace(" (default)", "");
};

function btnAlignItems(botao) {
    for (let e of document.getElementsByClassName("align-items")) {
        e.style.color = "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color = "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.alignItems = botao.textContent.replace(" (default)", "");
};

function btnAlignContent(botao) {
    for (let e of document.getElementsByClassName("align-content")) {
        e.style.color = "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color = "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.alignContent = botao.textContent.replace(" (default)", "");
};



function btnAlignSelf(botao) {
    for (let e of document.getElementsByClassName("align-self")) {
        e.style.color = "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color = "#71c558";
    botao.style.fontWeight = "700";

    itensFlex[indexAtual].css("align-self", botao.textContent.replace(" (default)", ""));
};


/*-------------------------------------------------------*\
    Métodos
\*-------------------------------------------------------*/

function addItemFlex() {
    var opacidade = indexUltimo !== -1 ? parseInt(itensFlex[indexUltimo].css("opacity") * 100, 10) : 50;

    indexUltimo++;

    var ipsum = oberLoremIpsum()

    $(`<button class="nav-link" onclick="trocarFormularioItem(${indexUltimo})" data-toggle="pill">${indexUltimo + 1}</button>`).appendTo(controlesItensAbas);
    itensFlex.push($(
        `<div class="item-flex" 
              id-flex="${indexUltimo}" 
              style="opacity: ${opacidade + 10}%; 
              padding: ${Math.floor(Math.random() * 50)}px 
              ${Math.floor(Math.random() * 50)}px 
              ${Math.floor(Math.random() * 50)}px 
              ${Math.floor(Math.random() * 50)}px">` +

        `${indexUltimo + 1} - ${ipsum}` +

        `</div>`).appendTo(containerFlex));

}

function trocarFormularioItem(indexSelecionado) {
    indexAtual = indexSelecionado;
    limparCampos();
    preencherCampos(indexSelecionado);
}

function limparCampos() {
    campoFlexGrow.val(null);
    campoFlexShrink.val(null);
    campoFlexBasis.val(null);
    campoConteudo.val("");
    campoWidth.val("");
    campoHeight.val("");
    campoPadding.val("");
    campoMargin.val("");
}

function preencherCampos(indexSelecionado) {
    campoFlexGrow.val(itensFlex[indexSelecionado].css("flex-grow"));
    campoFlexShrink.val(itensFlex[indexSelecionado].css("flex-shrink"));
    campoFlexBasis.val(itensFlex[indexSelecionado].css("flex-basis"));
    campoConteudo.val(itensFlex[indexSelecionado].html());

    var possuiWidth = false;
    var possuiHeight = false;

    for (let e of itensFlex[indexSelecionado][0].style) {
        if (e == "width") {
            possuiWidth = true;
        }
        if (e == "height") {
            possuiHeight = true;
        }
    }

    if (possuiWidth) {
        campoWidth.val(itensFlex[indexSelecionado].css("width"));
    }

    if (possuiHeight) {
        campoHeight.val(itensFlex[indexSelecionado].css("height"));
    }

    campoPadding.val(itensFlex[indexSelecionado].css("padding"));
    campoMargin.val(itensFlex[indexSelecionado].css("margin"));

    codeFlexGrow.html(campoFlexGrow.val());
    codeFlexShrink.html(campoFlexShrink.val());
    codeFlexBasis.html(campoFlexBasis.val());
}

/*-------------------------------------------------------*\
    ToolTips
\*-------------------------------------------------------*/

tippy.setDefaultProps({
    delay: 50,    
    allowHTML: true,
    animation: 'fade',
    interactive: true,
    placement: 'auto',
    theme: 'tomato',
    maxWidth: 600
});

tippy('.option', {
    content(reference) {
        const id = reference.getAttribute('data-template');
        const template = document.getElementById(id);
        return template.innerHTML;
    }
});

/*-------------------------------------------------------*\
    Utilitários
\*-------------------------------------------------------*/

function oberLoremIpsum() {
    var textos = [
        "Lorem Ipsum",
        "is simply dummy",
        "textoftheprintingandtypesettingindustry",
        "Lorem Ipsum has",
        "been the",
        "industry's",
        "standard dummy",
        "text ever since",
        "the 1500s",
        "when an unknown"
    ]

    return textos[Math.floor(Math.random() * 10)]
}
