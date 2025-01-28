import React from 'react'
import Link from 'next/link';
import image from 'next/image';

const Cabecalho = ()  => {
  return (
    <header>
        <div>
            <div className="foto_menu">
                {/* <Link href="/">
                    <Image
                    src={}
                    alt=''
                    />
                </Link> */}
            </div>
        </div>

        <div className="container-cabecalho">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link href="/sobre" className="link">SOBRE NÓS</Link></li>
                        <li><Link href="/blog" className="link">BLOG</Link></li>
                        <li><Link href="/contato" className="link">CONTATO</Link></li>
                        <li><Link href="/produtos" className="link">PRODUTOS</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    
  )
}
export default Cabecalho;