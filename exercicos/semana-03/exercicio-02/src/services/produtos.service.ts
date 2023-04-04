import { Produtos } from "../models/produtos.models";

class ProdutosServices {
    produtos: Array<Produtos> = [
        {
            id: '1',
            descricao: 'Notebook S51',
            preco: 5000,
            quant: 5,
            avaria: 'sim'
        },

        {
            id: '2',
            descricao: 'Notebook Samsung Book E30 Intel Core i3 4GB 1TB - 15,6” Full HD Windows 10',
            preco: 3500,
            quant: 3
        },

        {
            id: '3',
            descricao: 'Notebook Acer Aspire 5 A514-53-59QJ Intel Core I5 8GB 256GB SSD 14 Windows 10',
            preco: 4000,
            quant: 2
        },

        {
            id: '4',
            descricao: 'Notebook Samsung Book E30 15.6" Intel® Core™ i3-10110U 4GB/1TB Windows 10 Home',
            preco: 5000,
            quant: 0
        },

        {
            id: '5',
            descricao: 'Notebook ASUS VivoBook X543UA-GQ3157T Cinza Escuro',
            preco: 3350,
            quant: 2
        }
    ];

    getAll() {
        return this.produtos
    }

    getByDocument(id: string) {
        const produto = this.produtos.find((std) => std.id === id);
        return this.produtos

    }

    create(produto: Produtos) {
        this.produtos.push(produto);

    }

    remove(id: string) {
        const produtoIndex = this.produtos.findIndex((produto) => produto.id === id);
        if (produtoIndex === -1) {
            throw new Error("Estudante não encontrado!");
        }
        this.produtos.splice(produtoIndex, 1);
    }

    update(id: string, produto: Produtos) {
        const produtoIndex = this.produtos.findIndex((produto) => produto.id === id);
        if (produtoIndex === -1) {
            throw new Error("Estudante não encontrado!");
        };

        this.produtos[produtoIndex] = produto;
    }
}
export default new ProdutosServices();





