import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'


export default function Layout({children}) {
    return (
        <>
            <Header />
            <Aside />
            <main className='ml-96 mt-24'>
                {children}
            </main>
            <Footer />
        </>
    )
}
