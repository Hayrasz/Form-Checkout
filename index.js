function formatarValor(valor) {
    return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valor)
}

function calcular(adesivos, quantidade) {
    const isReact = adesivos.includes("react")
    const isVue = adesivos.includes("vue")
    const isAngular = adesivos.includes("angular")

    let total = 0;

    if (isReact) {
        total += quantidade * 5
    }
    if (isVue) {
        total += quantidade * 10
    }
    if (isAngular) {
        total += quantidade * 7
    }

    return total
}
