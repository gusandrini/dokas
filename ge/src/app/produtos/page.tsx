import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Produtos = () => {
  return (
    <div>

      <div className="paginas">
          <Link href="/" passHref>Home/Produtos</Link>
      </div>

      <div className="gelinho">
        <h1>Gelinho</h1>
        <p>
          ...
        </p>
      </div>

      <div className="mais-produtos">
        <p>
          Em breve mais produtos, deem sugestões através dos telefones de contato
        </p>
      </div>

    </div>
  )
}
export default Produtos;