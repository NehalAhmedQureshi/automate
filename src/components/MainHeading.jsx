import ShinyText from '@/reactBitsComponents/ShinyText/ShinyText'
import { Typography } from '@mui/material'
import React from 'react'

export default function MainHeading({text,variant , ...style}) {
    const word = text?.split(' ')?.slice(1,text.split(' ')?.length)?.join(' ')
  return (
    <Typography variant={variant ||'h2'} {...style}>
        <span style={{ color: "#1976d2" }}>{text.split(' ')[0]}</span> {word}
    </Typography>
  )
}
