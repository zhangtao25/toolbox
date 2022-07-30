import React from 'react'
import MainBox from '../components/MainBox/indexNew'
import Home from "../pages/home";

export default [
  {
    path: '/',
    element: <MainBox />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]
