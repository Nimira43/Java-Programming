import * as React from 'react'
import Layout from '../components/Layout'
import '../index.css'

export default function Home() {
  return (
    <Layout>
      <div>
        <h1 className='logo'>Gatsby Food</h1>
        <img src="/favicon.ico" alt="logo" width={100} height={80} />
      </div>
    </Layout>
  )
}
