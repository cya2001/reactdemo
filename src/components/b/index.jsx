import React from 'react'
import { useSectionInView } from '../../lib/hooks.ts'

export default function B() {
  const {ref} = useSectionInView('b');  
  return (
    <div style={{ border: '6px solid #f56565', borderRadius: '0.5rem', padding: '1rem', 
      height:'30rem'
    }}
      id='b'
      ref = {ref}
    >
      b
    </div>
  )
}
