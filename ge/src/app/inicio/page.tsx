import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Gelinho from '@/image/gelinho.jpeg'

const Inicio = () => {
  return (
    <div>
        <div className="cards-inicial">
            <div className="gelinho">
                <Image
                src={Gelinho}
                alt='Gelinho'
                />
                <Link className='btn-gelinho' href='/produtos'>Gelinho</Link>
            </div>
        </div>
    </div>
  )
}
export default Inicio;