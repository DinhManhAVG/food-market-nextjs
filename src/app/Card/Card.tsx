"use client";
import React from 'react'
import './card.css'
import custom from './custom.module.scss'
import clsx from 'clsx';

export default function Card() {
  const [ expanding , setExpanding ] = React.useState(false)
    return (
        <div className={clsx('card', {
          [custom.card]: expanding
      })}>Card</div>
  )
}
