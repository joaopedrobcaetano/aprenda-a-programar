const n = 17
let i = 2


while (n % i != 0)
    i = i + 1

    if (n == i) 
        console.log(`Sim, o número ${n} é primo.`)
    else
        console.log(`Não, o número ${n} não é primo.`)