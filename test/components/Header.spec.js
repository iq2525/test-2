import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Header from '../../components/Header'

function setup(propOverrides) {

  const renderer = TestUtils.createRenderer()
  renderer.render(<Header/>)
  const output = renderer.getRenderOutput()

  return {
    output: output
  }
}

describe('components', () => {
  describe('Header', () => {
    it('should render container', () => {
      const { output } = setup()

      expect(output.type).toBe('header')
    })
  })
})
