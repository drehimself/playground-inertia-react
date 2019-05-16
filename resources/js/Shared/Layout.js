import { InertiaLink } from 'inertia-react'
import React from 'react'

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <InertiaLink href="/">Home</InertiaLink>
        <InertiaLink href="/about">About</InertiaLink>
        <InertiaLink href="/contact">Contact</InertiaLink>
      </header>

      <article>{children}</article>
    </main>
  )
}
