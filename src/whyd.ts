import React from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'
const ENV = import.meta.env.DEV

if (ENV) {
  whyDidYouRender(React, {
    trackAllPureComponents: false
  })
}
