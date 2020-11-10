const SeqFibonacci = () =>{
    const val = parseInt(document.getElementById("number").value)
    const fibResult = fibonacci(val)
    const output  = document.getElementById("result")

    output.innerHTML = `A sequência fibonacci de ${val} é ${fibResult}`
}

const fibonacci = (value) =>{
    if (value===1) return 1
    if (value===2) return 1
    return fibonacci(value - 1) + fibonacci(value - 2)
}