import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import MainSection from '../../components/MainSection'
import RpsItem from '../../components/RpsItem'

function setup(propOverrides) {
  const props = Object.assign({
    game: {
      rpsType: null,
      computerChoice: null,
      gameOutcome: null
    },
    actions: {
      setPlayerChoice: expect.createSpy(),
      startNewGame: expect.createSpy()
    }
  }, propOverrides)

  const renderer = TestUtils.createRenderer()
  renderer.render(<MainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('section')
      expect(output.props.className).toBe('main')
    })
  })
})
