let produtoA = { "nome": "camiseta", "valor": 100.00, "internacional": true };
let produtoB = { "nome": "perfume", "valor": 200.00, "internacional": true };
let produtoC = { "nome": "sandália", "valor": 120.00, "internacional": false };

if (produtoA.internacional = true) {
    console.log(`O produto ${produtoA.nome} custa R$ ${produtoA.valor} e é internacional. O valor do produto com impostos é R$ ${(produtoA.valor * 1.2)}.`)
} else {
    console.log(`O produto ${produtoA.nome} custa R$ ${produtoA.valor} e é nacional. O valor do produto com impostos é R$ ${(produtoA.valor * 1.12)}.`)
}

if (produtoB.internacional = true) {
    console.log(`O produto ${produtoB.nome} custa R$ ${produtoB.valor} e é internacional. O valor do produto com impostos é R$ ${(produtoB.valor * 1.2)}.`)
} else {
    console.log(`O produto ${produtoB.nome} custa R$ ${produtoB.valor} e é nacional. O valor do produto com impostos é R$ ${(produtoB.valor * 1.12)}.`)
}

if (produtoC.internacional != true) {
    console.log(`O produto ${produtoC.nome} custa R$ ${produtoC.valor} e é nacional. O valor do produto com impostos é R$ ${(produtoC.valor * 1.12)}.`)
} else {
    console.log(`O produto ${produtoC.nome} custa R$ ${produtoC.valor} e é internacional. O valor do produto com impostos é R$ ${(produtoC.valor * 1.2)}.`)
}

