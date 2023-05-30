let alterarHora = (horario_atual) => {
    let campoHora = document.querySelector("#hora");
    let campoMinutos = document.querySelector("#minutos");
    let campoSegundos = document.querySelector("#segundos");

    campoHora.innerHTML = zeroAEsquerda(horario_atual.hora);
    campoMinutos.innerHTML = zeroAEsquerda(horario_atual.minutos);
    campoSegundos.innerHTML = zeroAEsquerda(horario_atual.segundos);
}

let alterarData = (data_atual) => {
    let campoDia = document.querySelector("#dia");
    let campoMes = document.querySelector("#mes");
    let campoAno = document.querySelector("#ano");

    campoDia.innerHTML = zeroAEsquerda(data_atual.dia);
    campoMes.innerHTML = zeroAEsquerda(data_atual.mes + 1);
    campoAno.innerHTML = zeroAEsquerda(data_atual.ano);
}

let zeroAEsquerda  = numero => numero < 10 ? `0${numero}`: numero;

setInterval(()=>{
    const data_completa =  new Date();
    let horario_atual = {
        hora:data_completa.getHours(),
        minutos:data_completa.getMinutes(),
        segundos:data_completa.getSeconds()
    }
    let data_atual = {
        dia:data_completa.getDate(),
        mes:data_completa.getMonth(),
        ano:data_completa.getFullYear()
    }

    alterarHora(horario_atual);
    alterarData(data_atual);

},1000)