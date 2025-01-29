import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
        <div className="paginas">
            <Link href="/" passHref>Home/Blog</Link>
        </div>

        <div className="introducao_blog">
            <h1>Bem-vindo ao nosso Blog!</h1>
            <h2>Saiba mais sobre nossos produtos e como fazer seu pedido</h2>
            <p>
                Nós, Gustavo e Maria, começamos nosso negócio com a venda de gelinhos e ficamos surpresos com o sucesso 
                e a aceitação incrível que tivemos. Em menos de uma semana, vendemos mais de 300 gelinhos e recebemos 
                muitos feedbacks positivos, o que nos motivou ainda mais a crescer e oferecer o melhor para nossos clientes!
            </p>
        </div>

        <div className="como_pedir">
            <h1>Como Fazer meu pedido? Passo a Passo para realizar seu pedido.</h1>
            <p>
                Passo 1: Verifique a disponibilidade dos sabores para pronta entrega.<br /><br />
                Passo 2: Caso não tenhamos o sabor desejado, podemos prepará-lo sob encomenda.<br /><br />
                Passo 3: Encomendas de sabores personalizados devem ter um mínimo de 10 unidades.<br /><br />
                Passo 4: O preço pode variar dependendo dos ingredientes necessários para sua escolha.<br /><br />
                Passo 5: Entre em contato e realize seu pedido!.<br /><br />
            </p>
        </div>

        <div className="encomendas">
            <h1>Como realizar uma encomenda?</h1>
            <p>
                Para sabores que não fazem parte da nossa linha padrão, realizamos encomendas a partir de 10 unidades. 
                O valor será calculado de acordo com os ingredientes necessários para a produção. 
                Além disso, oferecemos descontos especiais para pedidos em grandes quantidades!
            </p>
        </div>

        <div className="vendas">
            <h1>Nossas vendas</h1>
            <p>
                Estamos crescendo a cada dia e nos dedicamos a oferecer produtos de qualidade com muito carinho. 
                O sucesso das nossas vendas nos mostrou que estamos no caminho certo e queremos continuar 
                levando sabor e alegria para nossos clientes!
            </p>
            <p>
                Também oferecemos serviço de entrega, cujo valor será combinado com o cliente dependendo da distância. 
                Se preferir, você pode retirar o pedido pessoalmente sem custo adicional.
            </p>
        </div>

        <div className="contato">
            <h1>Entre em contato</h1>
            <p>
                Para realizar seu pedido ou tirar dúvidas, entre em contato pelos nossos telefones:<br />
                📞 (11) 94021-9422<br />
                📞 (11) 96222-1054
            </p>
        </div>
    </div>
  );
}

export default Blog;
