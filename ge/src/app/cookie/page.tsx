// import Link from 'next/link';
import React from 'react';

const Cookie = () => {
  return (
    <div>
      {/* <div className="paginas">
        <Link href="/" passHref>Home Cookie</Link>
      </div> */}

      <div className="cookie">
        <h1>Cookie</h1>
        <p>
          Nossos cookies são feitos com ingredientes selecionados para garantir muito sabor e qualidade! 
          Temos sabores fixos e também aceitamos encomendas personalizadas. Confira nossas opções:
        </p>

        <h2>Sabores Fixos</h2>
        <ul>
          <li>🍪 Tradicional</li>
          <li>🍫 Chocolate</li>
        </ul>
        <p><strong>Valor:</strong> Consultar</p>

        {/* <h2>Versão Zero Açúcar</h2>
        <p>
          Para quem busca uma opção mais saudável, temos os sabores Chocolate, Coco e Morango na versão 
          zero açúcar, sem perder o sabor e a cremosidade!
        </p>
        <p><strong>Valor:</strong> R$ 4,50 cada</p>

        <h2>Cookie Proteico</h2>
        <p>
          Está de dieta ou focado na sua alimentação? Temos a opção de cookie proteico, feito sob medida 
          para você! Podemos prepará-lo com whey protein ou outros ingredientes de sua preferência.
        </p>
        <p><strong>Valor:</strong> Consultar</p> */}

        <h2>Sabores Personalizados</h2>
        <p>
          Quer um sabor diferente? Fazemos diversos sabores sob encomenda! Basta nos avisar qual sabor deseja, 
          e preparamos para você. Para encomendas personalizadas, o pedido mínimo é de 10 unidades, e o valor 
          varia conforme os ingredientes utilizados.
        </p>
        <p><strong>Valor:</strong> Consultar</p>
      </div>
    </div>
  );
}

export default Cookie;
