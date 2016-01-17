import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Footer from '../../components/Footer'

function setup(propOverrides) {

  const renderer = TestUtils.createRenderer()
  renderer.render(<Footer/>)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}

function getTextContent(elem) {
  const children = Array.isArray(elem.props.children) ?
    elem.props.children : [ elem.props.children ]

  return children.reduce(function concatText(out, child) {
    // Children are either elements or text strings
    return out + (child.props ? getTextContent(child) : child)
  }, '')
}

describe('components', () => {
  describe('Footer', () => {
    it('should render container', () => {
      const { output } = setup()

      expect(output.type).toBe('footer')
    })
  })
})
