import React from 'react'

import App from "package-b/src/App";
import {mount} from 'cypress/react'

describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    cy.mount(App)
  })
})