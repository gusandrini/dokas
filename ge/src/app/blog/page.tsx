import React from 'react'
import Link from 'next/link';

const Blog = () => {
  return (
    <div>
        <div className="paginas">
            <Link href="/" passHref>Home/Blog</Link>
        </div>

        <div className="introducao_blog">
            <h1></h1>
            <h2></h2>
            <p>
            
            </p>
        </div>

        <div className="como_pedir">
            <h1>Como Fazer meu pedido? Passo a Passo para realizar seu pedido.</h1>
            <p>
                Passo 1: <br /><br />
                Passo 2: <br /><br />
                Passo 3: <br /> <br />
                Passo 4: <br /> <br />
            </p>
        </div>

        <div className="encomendas">
            <h1>Como realizar uma encomenda?</h1>
            <p>
                .
            </p>
        </div>

        <div className="vendas">
            <h1>Nossas vendas</h1>
            <p>
                .
            </p>
        </div>



    </div>
  )
}
export default Blog;
