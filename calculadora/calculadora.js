var tela = document.getElementById('txtcalc')
var n1
var n2
var resulatdo
var op 

//numeros e ponto
function clk9(){
    tela.value += 9
}
function clk8(){
    tela.value += 8
}
function clk7(){
    tela.value += 7
}
function clk6(){
    tela.value += 6
}
function clk5(){
    tela.value += 5
}
function clk4(){
    tela.value += 4
}
function clk3(){
    tela.value += 3
}
function clk2(){
    tela.value += 2
}
function clk1(){
    tela.value += 1
}
function clk0(){
    tela.value += 0
}
function clkponto(){
    tela.value += '.'
}

//operadores
function clkadicao(){
    n1 = Number(tela.value)
    tela . value = ""
    op=0
}
function clkdivisao(){
    n1 = Number(tela.value)
    tela . value = ""
    op=1
}
function clkmultiplicacao(){
    n1 = Number(tela.value)
    tela . value = ""
    op=2
}
function clksubtracao(){
    n1 = Number(tela.value)
    tela . value = ""
    op=3
}

//interações
function clkresultado(){
     
    n2 = Number(tela.value)
    tela.value = ""
    if(op==0){
        tela.value = n1+n2
    }else if(op==1){
        tela.value = n1/n2
    }else if(op==2){
        tela.value = n1*n2
    }else if(op==3){
        tela.value = n1-n2
    }
        

} 
function clkce(){
    n1 = ''
    n2 = ''
    op = ''
    tela.value =''  
}
