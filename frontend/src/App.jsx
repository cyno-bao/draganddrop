import React from "react";
import { BiDi } from '@react-form-builder/core';
import styled from "styled-components";
import { BuilderView, FormBuilder } from '@react-form-builder/designer';
import { ltrCssLoader, rsErrorMessage, RsLocalizationWrapper, rsTooltip, rSuiteComponents, rtlCssLoader } from '@react-form-builder/components-rsuite'
import './App.css'
const builderView = new BuilderView(rSuiteComponents.map(c => c.build()))
  .withErrorMeta(rsErrorMessage.build())
  .withTooltipMeta(rsTooltip.build())
  .withViewerWrapper(RsLocalizationWrapper)
  .withCssLoader(BiDi.LTR, ltrCssLoader)
  .withCssLoader(BiDi.RTL, rtlCssLoader)

const Container = styled.div`
  width: 100%
`
function App() {
  const onChange = (data) => {
    console.log('as', data)
  }
  return (
    <Container >
      <FormBuilder
        styled={{ width: 1500 }}
        view={builderView}
        onFormDataChange={({ data, errors }) => {
          console.log('onFormDataChange', data)
        }}
      // actions={onChange}
      />
    </Container>
  )
}

export default App