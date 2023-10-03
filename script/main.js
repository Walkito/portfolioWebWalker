const resolucaoCliente = window.innerWidth;

let intervaloSobreMim;
let intervaloHardSkills;
let intervaloSoftSkills;
let intervaloProjetos;
let i = 1;
let k = 1;
const numImagens = 18;
const numeroDeNiveis = 11;
const numProjetos = 4;

function global(){
    abrirMenu();
    fecharMenu();
    cursorAnimado();

    intervaloSobreMim = setInterval(function(){
        if(estaTela(pegarElemento('.sobreMim img'))){
            adicionarClasse(pegarElemento('.sobreMim'), 'sobreMimVisible');
            clearInterval(intervaloSobreMim);
        }
    },10);
    
    intervaloHardSkills = setInterval(function(){
        let elemento = pegarElemento(`.habilidade${i}`);
        if(estaTela(elemento)){
            niveisBateria(elemento,i);
            i +=1;
        }
        if(i === numeroDeNiveis+1){
            clearInterval(intervaloHardSkills);
            i = 1;
        }
    },10);

    intervaloSoftSkills = setInterval(function(){
        let elemento = pegarElemento(`.softSkill${i} img`);
        console.log(estaTela(elemento));
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
        let elemento = pegarElemento(`.projeto${k} h3`);
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
        if(resolucaoCliente >= 393){
            posicaoEsqInicial = 57;
        } else if(resolucaoCliente >= 360){
            posicaoEsqInicial = 55;
        } else if(resolucaoCliente >= 320){
            posicaoEsqInicial = 50;
        }
      
        switch(linha){
            case 1:
                if(resolucaoCliente >= 393){
                    posicaoBottomInicial = 54;
                } else{
                    posicaoBottomInicial = 60;
                }
                break;
            case 2:
                if(resolucaoCliente >= 412){
                    cursor.style.height = '85px';
                    posicaoBottomInicial = 34;
                } else if(resolucaoCliente >= 393){
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
                if(resolucaoCliente >= 412){
                    cursor.style.height = '54px';
                    posicaoBottomInicial = 8;
                    posicaoEsqInicial = 50;
                } else if(resolucaoCliente >= 393){
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
                    cursor.style.left = (posicaoEsqInicial - 6) + '%';
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
                
                if(resolucaoCliente >= 360){
                    return (posicaoEsqInicial + 4);
                } else if(resolucaoCliente >= 320){
                    return (posicaoEsqInicial + 5);
                }
            case 2:
                if(resolucaoCliente >= 360){
                    return (posicaoEsqInicial + 5.5);
                } else if(resolucaoCliente >= 320){
                    return (posicaoEsqInicial + 6.5);
                }
            case 3:
                if(resolucaoCliente >= 393){
                    return (posicaoEsqInicial + 3.5);
                } else{
                    return (posicaoEsqInicial + 3); 
                }
        } 
    }
}

function niveisBateria(elemento,i){
    function pegarClasseNivel(num){
        return document.querySelector('.nivel'+ num);
    }

    let divNivel;
    let paragrafo;

    elemento = pegarClasseNivel(i);
    divNivel = elemento.querySelector('.nivel');
    paragrafo = elemento.querySelector('.nivel p');
    switch(paragrafo.textContent){
        case '100%':
            divNivel.style.backgroundColor = 'rgb(15, 105, 3)';
            break;
        case '80%':
            divNivel.style.background = 'linear-gradient(to right, rgb(33, 238, 6) 80%, white 0%)';
            break;
        case '60%':
            divNivel.style.background = 'linear-gradient(to right, rgb(221, 207, 9) 60%, white 0%)'; 
            break;    
        case '40%':
            divNivel.style.background = 'linear-gradient(to right, rgb(221, 136, 9) 40%, white 0%)';
            break;       
        }
    adicionarClasse(divNivel, 'nivelAnimado');
    adicionarClasse(paragrafo, 'paragrafoAnimado');
}

function rodarImagens(elementoImg,i){
    let elementoTitulo;
    elementoTitulo = pegarElemento(`.softSkill${i} h3`);
    adicionarClasse(elementoImg, 'softSkillsRodarImagem');
    adicionarClasse(elementoTitulo, 'softSkillsTituloAnimado');
}

function slideCards(i){
    let elementoDiv = pegarElemento(`.projeto${i}`);
    adicionarClasse(elementoDiv, (i % 2) == 0 ? 'slideDireita' : 'slideEsquerda');
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
    const overlay = pegarElemento('.overlay');
    const verMais = pegarElemento('.verMais');
    const fechar = pegarElemento(`.verMais${num} h1`);

    let verMaisN;

    overlay.style.opacity = 1;
    overlay.style.zIndex = 1;
    verMais.style.opacity = 1;
    verMais.style.zIndex = 2;

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
        verMais.style.opacity = 0;
        verMais.style.zIndex = -2;
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

global();

