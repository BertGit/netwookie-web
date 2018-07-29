import React from 'react'

import Statement from './Statement/Statement'

import './Statements.css'

let statements = (props) => {
    return (
        <div id='statements'>
            <h1>What clients think</h1>
            <div id='statements-scroller'>
                <Statement
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis massa, ultricies vel nulla et, volutpat lobortis eros.'
                    author='Kylian Mbappé'
                    origin='Nairobi, Kenya' />
                <Statement
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis massa, ultricies vel nulla et, volutpat lobortis eros.'
                    author='Kylian Mbappé'
                    origin='Nairobi, Kenya' />
                <Statement
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam turpis massa, ultricies vel nulla et, volutpat lobortis eros.'
                    author='Kylian Mbappé'
                    origin='Nairobi, Kenya' />
            </div>
        </div>
    )
}

export default statements