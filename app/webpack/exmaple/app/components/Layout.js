import React from 'react';
import './test.css'

export default function Layout({ children }) {
  return (
    <div className="color">
      <h1>Hello</h1>
      {children}
    </div>
  )
}
