class pedido {
    constructor(nomeArt, extra) {
        this.nomeArt = nomeArt;
        this.extra = extra;
    }
}

class factura {
    constructor(nome, pedidos) {
        this.id = new Date().getTime();
        this.nome = nome;
        this.pedidos = pedidos;
    }
}
