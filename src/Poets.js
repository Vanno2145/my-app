import React from 'react'
import Lesya from './Poets/Lesya'
import Taras from './Poets/Taras'
import Franko from './Poets/Franko'
import './Style/Poet.css'

function Poets() {
    return (
        <div className='wrap'>
            <Lesya></Lesya>
            <Taras></Taras>
            <Franko></Franko>
        </div>
    )
}

export default Poets
