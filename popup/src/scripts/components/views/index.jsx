import React from 'react'
import { ThemeProvider } from 'styled-components'

import Head from '../partials/head'
import Body from '../partials/body'
import { ViewWrap } from './styles'

const theme = {
  dark: '#000',
  light: '#fff',
  gray: '#ccc',
  transition: '0.3s all ease-in-out'
}

class View extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ViewWrap>
          <Head />
          <Body />
        </ViewWrap>
      </ThemeProvider>
    )
  }
}

export default View
