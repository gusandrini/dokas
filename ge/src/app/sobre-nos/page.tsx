import Link from 'next/link';
import React from 'react';

const Sobre = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Sobre nós</Link>
      </div>

      <div className="introducao-sobre">
        <h1>Sobre Nós</h1>
        <p>
          Somos Gustavo e Maria, um casal que decidiu transformar uma ideia simples em um negócio real. 
          Tudo começou com a venda de gelinhos, uma maneira de ganhar um dinheirinho extra e tornar possíveis nossas vontades. 
          Mas logo percebemos que poderíamos ir além e criar algo maior.
        </p>
      </div>

      <div className="historia">
        <h1>História</h1>
        <p>
          Nossa jornada começou com a venda de gelinhos, mas nossa paixão por doces e salgados nos motivou a expandir. 
          Agora, estamos planejando incluir bolos, docinhos, salgados e até mesmo opções especiais para aniversários e eventos. 
          Queremos levar sabor e qualidade para nossos clientes, sempre com muito carinho e dedicação.  
        </p>
        <p>
          Nosso objetivo é crescer e tornar nosso pequeno negócio algo ainda mais especial. Obrigado por fazer parte da nossa história!
        </p>
      </div>
    </div>
  );
};

export default Sobre;
