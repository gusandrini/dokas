import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Inicio = () => {
  return (
    <div>
        <div className="cards-inicial">
            <div className="gelinho">
                <Image
                src={}
                alt=''
                />
                <Link className='btn-gelinho' href='/produtos'>Gelinho</Link>
            </div>
        </div>
    </div>
  )
}
export default Inicio;