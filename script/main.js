const resolucaoCliente = window.innerWidth;

let intervaloSobreMim;
let intervaloHardSkills;
let intervaloSoftSkills;
let intervaloProjetos;
let i = 1;
let k = 1;
const numImagens = 18;
const numeroHardSkills = 8;
const numProjetos = 4;

function global(){
    if(resolucaoCliente <= 1280){
        abrirMenu();
        fecharMenu();
    } 

    cursorAnimado();

    intervaloSobreMim = setInterval(function(){
        if(resolucaoCliente >= 1280){
            if(estaTela(pegarElemento('.sobreMim p'))){
                adicionarClasse(pegarElemento('.sobreMim'), 'sobreMimVisible');
                clearInterval(intervaloSobreMim);
            }
        } else {
            if(estaTela(pegarElemento('.sobreMim img'))){
                adicionarClasse(pegarElemento('.sobreMim'), 'sobreMimVisible');
                clearInterval(intervaloSobreMim);
            }
        }
    },10);
    
    intervaloHardSkills = setInterval(function(){
        let elemento = pegarElemento(`.habilidade${i} img`);
        if(estaTela(elemento)){
            slideHardSkills(elemento);
            i +=1;
        }
        if(i === numeroHardSkills+1){
            clearInterval(intervaloHardSkills);
            i = 1;
        }
    },10)

    intervaloSoftSkills = setInterval(function(){
        let elemento = pegarElemento(`.softSkill${i} img`);
        if(estaTela(elemento)){
            rodarImagens(elemento,i);
            i +=1;
        }
        if(i === numImagens+1){
            clearInterval(intervaloSoftSkills);
            i = 1;
        }
    },10);

    intervaloProjetos = setInterval(function(){
        let elemento;
        if (k === 1){
            elemento = pegarElemento(`.projetos h1`);
            if(estaTela(elemento)){
                for(let x = 1; x <= numProjetos; x++){
                    ativarCards(x);
                }
            }
        } else {
            elemento = pegarElemento(`.projeto${k} h3`);
        }
        
        if(estaTela(elemento)){
            slideCards(k);
            k +=1;
        }

        if(k === numProjetos+1){
            clearInterval(intervaloProjetos);
        }
    },10);

    botoesVerMais();
}

function alteracoesDesktop(){
    const nav = pegarElemento('.nav');
    nav.style.zIndex = 1;
}

function abrirMenu(){
    const imgMenu = pegarElemento('.imgMenu img');
    const overlay = pegarElemento('.overlay');
    imgMenu.addEventListener('click',function(){
        const menuLateral = pegarElemento('.nav');
        removerClasse(menuLateral,'navVoltando');
        menuLateral.style.display = 'inline-block';
        overlay.style.opacity = 1;
        overlay.style.zIndex = 2;   
    });
}

function fecharMenu(){
    const imgMenu = pegarElemento('.nav img');
    const overlay = pegarElemento('.overlay');
    imgMenu.addEventListener('click',function(){
        const menuLateral = pegarElemento('.nav');
        overlay.style.opacity = 0;
        overlay.style.zIndex = -1;      
        adicionarClasse(menuLateral, 'navVoltando');
    });
}

function cursorAnimado(){
    const tempo = 1500;
    const primeiroNome = pegarElemento('.primeiroNome');
    const sobrenome = pegarElemento('.sobrenome');
    const subtitulo = pegarElemento('.subtitulo');
    const cursor = pegarElemento('.cursor');
    let letras;
    let linha = 1;

    letras = separarLetras(primeiroNome.textContent);
    adicionarLetras(linha, primeiroNome, letras, 0, cursor);

    setTimeout(function(){
        letras = separarLetras(sobrenome.textContent);
        adicionarLetras(linha+1, sobrenome, letras, 0, cursor);    
    },tempo);

    setTimeout(function(){
        letras = separarLetras(subtitulo.textContent);
        adicionarLetras(linha+2, subtitulo, letras, 0, cursor);    
    },tempo*2);

    function separarLetras(palavra){
        return palavra.split('');
    }

    function adicionarLetras(linha, elementoHTML, letras, index, cursor){
        let intervalo;
        let posicaoBottomInicial;
        let posicaoEsqInicial;
        if(resolucaoCliente >= 1200){
            posicaoEsqInicial = 52;
        } else if(resolucaoCliente >= 393){
            posicaoEsqInicial = 57;
        } else if(resolucaoCliente >= 360){
            posicaoEsqInicial = 55;
        } else if(resolucaoCliente >= 320){
            posicaoEsqInicial = 50;
        }
      
        switch(linha){
            case 1:
                if(resolucaoCliente >= 1700){
                    posicaoBottomInicial = 60;
                } else if(resolucaoCliente >= 1200){
                    posicaoBottomInicial = 56;
                } else if(resolucaoCliente >= 884){
                    posicaoBottomInicial = 55;
                } else if(resolucaoCliente >= 390){
                    posicaoBottomInicial = 54;
                } else{
                    posicaoBottomInicial = 60;
                }
                break;
            case 2:
                if(resolucaoCliente >= 1700){
                    cursor.style.height = '230px';
                    posicaoBottomInicial = 29;
                } else if(resolucaoCliente >= 1300){
                    cursor.style.height = '160px';
                    posicaoBottomInicial = 27;
                } else if(resolucaoCliente >= 1200){
                    cursor.style.height = '200px';
                    posicaoBottomInicial = 27;
                } else if(resolucaoCliente >= 884){
                    cursor.style.height = '185px';
                    posicaoBottomInicial = 30;
                } else if(resolucaoCliente >= 820){
                    cursor.style.height = '165px';
                    posicaoBottomInicial = 30;
                } else if(resolucaoCliente >= 768){
                    cursor.style.height = '150px';
                    posicaoBottomInicial = 30;
                } else if(resolucaoCliente >= 412){
                    cursor.style.height = '85px';
                    posicaoBottomInicial = 34;
                } else if(resolucaoCliente >= 390){
                    cursor.style.height = '80px';
                    posicaoBottomInicial = 34;
                } else if(resolucaoCliente >= 360){
                    cursor.style.height = '70px';
                    posicaoBottomInicial = 38;  
                } else if(resolucaoCliente >= 320){
                    cursor.style.height = '65px';
                    posicaoBottomInicial = 38;               
                }
                break;
            case 3:
                if(resolucaoCliente >= 1700){
                    cursor.style.height = '80px';
                    posicaoBottomInicial = 9;
                } else if(resolucaoCliente >= 1400){
                    cursor.style.height = '70px';
                    posicaoBottomInicial = 9;
                } else if(resolucaoCliente >= 1300){
                    cursor.style.height = '60px';
                    posicaoBottomInicial = 6;
                } else if(resolucaoCliente >= 1200){
                    cursor.style.height = '90px';
                    posicaoBottomInicial = 8;
                    posicaoEsqInicial = 50;
                } else if(resolucaoCliente >= 884){
                    cursor.style.height = '95px';
                    posicaoBottomInicial = 9;
                    posicaoEsqInicial = 52;
                } else if(resolucaoCliente >= 820){
                    cursor.style.height = '85px';
                    posicaoBottomInicial = 9;
                    posicaoEsqInicial = 52;
                } else if(resolucaoCliente >= 768){
                    cursor.style.height = '75px';
                    posicaoBottomInicial = 10;
                    posicaoEsqInicial = 50;
                } else if(resolucaoCliente >= 412){
                    cursor.style.height = '50px';
                    posicaoBottomInicial = 10;
                    posicaoEsqInicial = 50;
                } else if(resolucaoCliente >= 390){
                    cursor.style.height = '50px';
                    posicaoBottomInicial = 8;
                    posicaoEsqInicial = 50;
                } else if(resolucaoCliente >= 360){
                    cursor.style.height = '45px';
                    posicaoBottomInicial = 11;  
                } else if(resolucaoCliente >= 320){
                    cursor.style.height = '35px';
                    posicaoBottomInicial = 11;  
                }
                break;
        }
        
        elementoHTML.innerHTML = '';
        elementoHTML.style.opacity = 1;
        elementoHTML.innerHTML += `<h1>`;
        intervalo = setInterval(function() {
            moverCursor(cursor, posicaoEsqInicial+'%', posicaoBottomInicial+'%');
            posicaoEsqInicial = novaPosicaoEsquerda(linha, posicaoEsqInicial);
            elementoHTML.innerHTML += `${letras[index]}`;
            index +=1;
            if (letras.length === index){
                if(linha === 3){
                    if(resolucaoCliente >= 1300){
                        cursor.style.left = (posicaoEsqInicial - 1) + '%';
                    } else if(resolucaoCliente >= 1200){
                        cursor.style.left = (posicaoEsqInicial - 4) + '%';
                    } else {
                        cursor.style.left = (posicaoEsqInicial - 6) + '%';
                    }
                }
                clearInterval(intervalo);
            }
        }, 150);
        elementoHTML.innerHTML += `</h1>`;
    }

    function moverCursor(cursor, posicaoEsqInicial, posicaoBottomInicial){
        cursor.style.left = posicaoEsqInicial;
        cursor.style.bottom = posicaoBottomInicial;
    }

    function novaPosicaoEsquerda(linha, posicaoEsqInicial){
        switch(linha){
            case 1:
                if(resolucaoCliente >= 1700){
                    return (posicaoEsqInicial + 2.6);
                } else if(resolucaoCliente >= 1400){
                    return (posicaoEsqInicial + 2.2);
                } else if(resolucaoCliente >= 1300){
                    return (posicaoEsqInicial + 2.5);
                } else if(resolucaoCliente >= 1200){
                    return (posicaoEsqInicial + 2.8);
                } else if(resolucaoCliente >= 360){
                    return (posicaoEsqInicial + 4);
                } else if(resolucaoCliente >= 320){
                    return (posicaoEsqInicial + 5);
                }
            case 2:
                if(resolucaoCliente >= 1700){
                    return (posicaoEsqInicial + 4);
                } else if(resolucaoCliente >= 1400){
                    return (posicaoEsqInicial + 3.2);
                } else if(resolucaoCliente >= 1300){
                    return (posicaoEsqInicial + 3.6);
                } else if(resolucaoCliente >= 1200){
                    return (posicaoEsqInicial + 4.8);
                } else if(resolucaoCliente >= 360){
                    return (posicaoEsqInicial + 5.5);
                } else if(resolucaoCliente >= 320){
                    return (posicaoEsqInicial + 6.5);
                }
            case 3:
                if(resolucaoCliente >= 1400){
                    return (posicaoEsqInicial + 1.1);
                } else if(resolucaoCliente >= 1300){
                    return (posicaoEsqInicial + 1);
                } else if(resolucaoCliente >= 1200){
                    return (posicaoEsqInicial + 2);
                } else if(resolucaoCliente >= 768){
                    return (posicaoEsqInicial + 2.8);
                } else if(resolucaoCliente >= 390){
                    return (posicaoEsqInicial + 3.5);
                } else{
                    return (posicaoEsqInicial + 3); 
                }
        } 
    }
}

function rodarImagens(elementoImg,i){
    let elementoTitulo;
    elementoTitulo = pegarElemento(`.softSkill${i} h3`);
    adicionarClasse(elementoImg, 'softSkillsRodarImagem');
    adicionarClasse(elementoTitulo, 'softSkillsTituloAnimado');
}

function slideHardSkills(elemento){
    adicionarClasse(elemento, 'iconsAnimation');
}

function ativarCards(i){
    let elementoDiv = pegarElemento(`.projeto${i}`);
    elementoDiv.style.display = 'block';
}

function slideCards(i){
    let elementoDiv = pegarElemento(`.projeto${i}`);
    if(resolucaoCliente >= 1280){
        adicionarClasse(elementoDiv, 'slideCima');
    } else {
        adicionarClasse(elementoDiv, (i % 2) == 0 ? 'slideDireita' : 'slideEsquerda');
    }
}

function botoesVerMais(){
    const botoes = [];
    let button;
    for(let i = 1; i <= numProjetos; i++){
        button = pegarElemento(`.projeto${i} button`);
        botoes.push(button);
        addEvent(i-1,botoes);
    }
}

function addEvent(index,arrBotoes) {
    arrBotoes[index].addEventListener('click', function () {
        verMais(index+1);
    });
}

function verMais(num){
    alteracoesDesktop();
    const overlay = pegarElemento('.overlay');
    const verMais = pegarElemento('.verMais');
    const fechar = pegarElemento(`.verMais${num} h1`);

    let verMaisN;

    overlay.style.opacity = 1;
    overlay.style.zIndex = 1;
    overlay.style.display = 'block';
    verMais.style.opacity = 1;
    verMais.style.zIndex = 2;
    verMais.style.display = 'block';

    switch(num){
        case 1:
            verMaisN = pegarElemento(`.verMais${num}`);
            verMaisN.style.opacity = 1;
            break;
        case 2:
            verMaisN = pegarElemento(`.verMais${num}`);
            verMaisN.style.opacity = 1;
            break;
        case 3:
            verMaisN = pegarElemento(`.verMais${num}`);
            verMaisN.style.opacity = 1;
        break;   
        case 4:
            verMaisN = pegarElemento(`.verMais${num}`);
            verMaisN.style.opacity = 1;
        break;                         
    }

    verMaisN.style.display = 'block';

    fechar.addEventListener('click', function(){
        verMaisN.style.display = 'none';
        verMaisN.style.opacity = 0;
        overlay.style.opacity = 0;
        overlay.style.zIndex = -1;
        overlay.style.display = 'none';
        verMais.style.opacity = 0;
        verMais.style.zIndex = -2;
        verMais.style.display = 'none';
    })
}

function adicionarClasse(elemento, novaClasse){
    elemento.classList.add(novaClasse);
}

function removerClasse(elemento, classe){
    elemento.classList.remove(classe);
}

function pegarElemento(classe){
    return document.querySelector(classe);
}

function estaTela(elemento){
    if(elemento !== null){
        let retangulo = elemento.getBoundingClientRect();
        return retangulo.top > 0 && retangulo.bottom < window.innerHeight;
    } else{
        return false;
    }
}

window.addEventListener('load', function() {
    global();
})

