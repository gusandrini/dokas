import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Insta from '@/image/instagram.png';
// import Face from '@/image/facebook.png'; // Corrigido para a imagem correta do Facebook

const Rodape = () => {
  return (
    <footer className="rodape">
      <div className="container">
        {/* Redes Sociais */}
        <h2 className="titulo_rodape">Nos Siga nas Redes Sociais</h2>
        <div className="redes_sociais">
          <Link className="rede" target="_blank" rel="noopener" href="https://www.instagram.com/dokasoficial/">
            <Image src={Insta} alt="Instagram" width={30} height={30} />
          </Link>

          {/* <Link className="rede" target="_blank" rel="noopener" href="https://www.facebook.com/seu_facebook">
            <Image src={Face} alt="Facebook" width={30} height={30} />
          </Link> */}
        </div>

        {/* Contato */}
        <div className="contato">
          <h3>Entre em Contato</h3>
          <p>📞 (11) 94021-9422</p>
          <p>📞 (11) 96222-1054</p>
          <p>📍 Entrega disponível ou retirada sem custo adicional.</p>
          <Link className="btn-pedido" href="/blog">Saiba como pedir</Link>
        </div>

        {/* Direitos Autorais */}
        <div className="copyright">
          <p>© {new Date().getFullYear()} - Gustavo & Maria | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
