import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/image/doceria.png' 

const Cabecalho = ()  => {
  return (
    <header>
        <div className='logos'>
            <div className="foto_menu">
                <Link href="/">
                    <Image
                    src={Logo}
                    alt='Logo de nossa marca'
                    />
                </Link>
            </div>
            <div className="foto_menu">
                <Link href="/">
                    <Image
                    src={Logo}
                    alt='Logo de nossa marca'
                    />
                </Link>
            </div>
            <div className="foto_menu">
                <Link href="/">
                    <Image
                    src={Logo}
                    alt='Logo de nossa marca'
                    />
                </Link>
            </div>
            <div className="foto_menu">
                <Link href="/">
                    <Image
                    src={Logo}
                    alt='Logo de nossa marca'
                    />
                </Link>
            </div>
            <div className="foto_menu">
                <Link href="/">
                    <Image
                    src={Logo}
                    alt='Logo de nossa marca'
                    />
                </Link>
            </div>
        </div>

        <div className="container-cabecalho">
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link href="/sobre-nos" className="link">SOBRE NÓS</Link></li>
                        <li><Link href="/blog" className="link">BLOG</Link></li>
                        <li><Link href="/produtos" className="link">PRODUTOS</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    
  )
}
export default Cabecalho;