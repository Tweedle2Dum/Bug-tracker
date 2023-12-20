import React from 'react'
import { Hero } from '../../components/UI/Landing/Hero/Hero'
import FeaturesGrid from '../../components/UI/Landing/Features/Features'

type Props = {}

export default function page({}: Props) {
  return (
    <div>

    <Hero/>
    <FeaturesGrid/>

    </div>
  )
}