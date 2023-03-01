function recebeTresValores(idade , ensinoMedio , cursandoFaculdade) {
    
    if(idade >= 18) {
        console.log(`Verdadeiro, maior de idade`)

    } else {
        console.log(`falso`)
    }
    if(ensinoMedio === true) {
        console.log(`verdadeiro completou ensino medio`)
    } else {
        console.log(`falso`)
    }
    if(cursandoFaculdade === true) {
        console.log(`tem faculdade`)
    } else {
        console.log(`nao cursou faculdade`)
    }

}

recebeTresValores(true, false)