var containerFlex = document.getElementById("container-flex")

function btnFlexDirection(botao) {      
    for (let e of document.getElementsByClassName("flex-direction")) {
        e.style.color =  "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color =  "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.flexDirection = botao.textContent.replace(" (default)", "");
};

function btnFlexWrap(botao) {
    for (let e of document.getElementsByClassName("flex-wrap")) {
        e.style.color =  "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color =  "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.flexWrap = botao.textContent.replace(" (default)", "");
};

function btnJustifyContent(botao) {
    for (let e of document.getElementsByClassName("justify-content")) {
        e.style.color =  "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color =  "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.justifyContent = botao.textContent.replace(" (default)", "");
};

function btnAlignItems(botao) {
    for (let e of document.getElementsByClassName("align-items")) {
        e.style.color =  "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color =  "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.alignItems = botao.textContent.replace(" (default)", "");
};

function btnAlignContent(botao) {
    for (let e of document.getElementsByClassName("align-content")) {
        e.style.color =  "#212529";
        e.style.fontWeight = "100";
    }

    botao.style.color =  "#71c558";
    botao.style.fontWeight = "700";

    containerFlex.style.alignContent = botao.textContent.replace(" (default)", "");
};

