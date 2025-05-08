let contador = 0

const resultado = document.querySelector("#resultado")

const btnIncrementaValor = document.querySelector("#btnIncrementar")

const btnTirarValor = document.querySelector("#btnTirar")

btnIncrementaValor.addEventListener("click", ()=>{
    contador++
    resultado.textContent = `Contador: ${contador}`
})

btnTirarValor.addEventListener("click", ()=>{
    if(contador > 0){
        contador--
        resultado.textContent = `Contador: ${contador}`
    }
})
