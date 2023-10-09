import React from 'react'
import { Outlet } from 'react-router-dom'

export default function CareersLayout() {
  return (
    <div>
      <h2>Carrers</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, cumque.
      </p>

      <Outlet />
    </div>
  );
}
