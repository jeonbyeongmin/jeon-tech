import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from '../../GlobalStyle'
import Introduction from 'components/organisms/Introduction'
import Footer from 'components/organisms/Footer'
import CategoryList from 'components/organisms/CategoryList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const IndexPage: FunctionComponent = () => {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <Footer />
    </Container>
  )
}

export default IndexPage
