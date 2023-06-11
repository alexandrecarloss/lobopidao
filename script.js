// Objetivo: fazer o botão não se mexer para uma posição aleatória quando o mouse passar por cima ou se for clicado, se o usuário clicar em "sim", irá para o video do fototeta

//Função sim quando o botão sim é clicado, redireciona para YT
function sim() {
    alert("Fortaleceu :)");
    window.open('https://www.youtube.com/shorts/rtC3oFU-R78', '_self');
}

//Função gera número aleatório com % no final para modificar a posição do botão não
function geraPosicao(min, max) {
    return Math.floor(Math.random() *(max - min) + min) + "%";
}

//Função ativada quando o mouse passa por cima do botão não ou quando ele é clicado
function desvia(botao) {
    var btn = botao;
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.right = geraPosicao(10, 90);
    console.log('Opa, desviei...');
}