import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Gelinho from '@/image/gelinho.jpeg';

const Inicio = () => {
  return (
    <div className="container">
      {/* Seção de Introdução */}
      <div className="banner">
        <h1>Bem-vindo ao nosso negócio!</h1>
        <p>
          Somos Gustavo e Maria, e criamos esse negócio para oferecer os melhores doces e salgados! 
          Começamos com a venda de gelinhos e, com o apoio de nossos clientes, estamos expandindo para bolos, docinhos, salgados e muito mais.
        </p>
        <Link href="/sobre-nos" className="btn-sobre">Saiba mais</Link>
      </div>

      <div className="nossos-produtos">
        <h2>Nossos Produtos</h2>
      </div>
      {/* Destaque de Produtos */}
      <div className="cards-inicial">
        <div className="produto">
          <Image src={Gelinho} alt="Gelinho" />
          <Link className="btn-produto" href="/produtos">Gelinho</Link>
        </div>
        {/* Aqui você pode adicionar mais produtos futuramente */}
      </div>

      {/* Seção de Contato */}
      <div className="contato">
        <h2>Faça seu pedido!</h2>
        <p>
          📞 Entre em contato e garanta seu pedido:<br />
          <strong>(11) 94021-9422</strong> ou <strong>(11) 96222-1054</strong>
        </p>
        <p>
          📍 Entregamos na sua residência (valor a combinar) ou você pode retirar sem custo adicional.
        </p>
        <Link href="/blog" className="btn-contato">Saiba como pedir</Link>
      </div>
    </div>
  );
}

export default Inicio;
