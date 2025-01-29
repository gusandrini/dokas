import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import Insta from '@/image/instagram.png';
import Face from '@/image/instagram.png'

const Rodape = ()  => {
  return (
    <div>
        <footer >
            <h2 className="titulo_rodape">
                REDES SOCIAIS
            </h2>
            <div className="redes_sociais">
                <div className="instagram">
                    <ul>
                        <li>
                            <Link className="instagram" target='_blank' rel='noopener' title='site instagram' href='/'>
                                <Image src={Insta} alt='Instagram'/>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link className="facebook" target='_blank' rel='noopener' title='site facebook' href='/'>
                                <Image src={Face} alt='Facebook'/>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>
                                Para entrar em contato ligue: <br />(11)94021-9422 ou (11)96222-1054
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  )
}
export default Rodape;