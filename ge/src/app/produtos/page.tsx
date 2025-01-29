import Link from 'next/link';
import React from 'react';

const Produtos = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/" passHref>Home/Produtos</Link>
      </div>

      <div className="gelinho">
        <h1>Gelinho</h1>
        <p>
          Nossos gelinhos são feitos com ingredientes selecionados para garantir muito sabor e qualidade! 
          Temos sabores fixos e também aceitamos encomendas personalizadas. Confira nossas opções:
        </p>

        <h2>Sabores Fixos</h2>
        <ul>
          <li>🍫 Chocolate</li>
          <li>🥥 Coco</li>
          <li>🍓 Morango</li>
        </ul>

        <h2>Versão Zero Açúcar</h2>
        <p>
          Para quem busca uma opção mais saudável, temos os sabores Chocolate, Coco e Morango na versão 
          zero açúcar, sem perder o sabor e a cremosidade!
        </p>

        <h2>Gelinho Proteico</h2>
        <p>
          Está de dieta ou focado na sua alimentação? Temos a opção de gelinho proteico, feito sob medida 
          para você! Podemos prepará-lo com whey protein ou outros ingredientes de sua preferência.
        </p>

        <h2>Sabores Personalizados</h2>
        <p>
          Quer um sabor diferente? Fazemos diversos sabores sob encomenda! Basta nos avisar qual sabor deseja, 
          e preparamos para você. Para encomendas personalizadas, o pedido mínimo é de 10 unidades, e o valor 
          varia conforme os ingredientes utilizados.
        </p>
      </div>

      <div className="mais-produtos">
        <h2>Mais produtos em breve!</h2>
        <p>
          Em breve, traremos mais novidades, incluindo bolos, docinhos e salgados. Tem alguma sugestão? 
          Entre em contato conosco e nos ajude a criar novos sabores e produtos incríveis! 📞
        </p>
        <p>
          📞 <strong>(11) 94021-9422</strong> ou <strong>(11) 96222-1054</strong>
        </p>
      </div>
    </div>
  );
}

export default Produtos;
