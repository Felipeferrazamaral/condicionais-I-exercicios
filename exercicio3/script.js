function recebeUsuario() {
    const nacionalidade = prompt(`Escreva aqui sua nacionalidade`)
    const nacionalidadeTolower = nacionalidade.toLowerCase()
   
    
    if(nacionalidadeTolower === `brasileira`) {
        console.log(`Brasileira`)
      

    } else if (nacionalidadeTolower === `argentina`) {
        console.log(`Argentina`)
    } else if (nacionalidadeTolower === `uruguaia`) {
        console.log(`Uruguaia`)
    } else if (nacionalidadeTolower === `chilena`) {
        console.log(`Chilena`)

    } else if (nacionalidadeTolower === `colombiana`) {
        console.log(`Colombiana`)
    } else {
        console.log(`Nacionalidade nao encontrada`)
    }
}
recebeUsuario()