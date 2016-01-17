import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import RpsItem from '../../components/RpsItem'
import { SET_PLAYER_CHOICE } from '../../constants/ActionTypes'

function setup() {
  const props = {
    rpsType: 'test',
    setPlayerChoice: expect.createSpy(),
  }

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <RpsItem {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('RpsItem', () => {
    it('initial render', () => {
      const { output } = setup()

      expect(output.type).toBe('li')
      expect(output.props.className).toBe('game-choice')

      const button = output.props.children

      expect(button.type).toBe('button')
      expect(button.props.className).toBe('game-choice__button')
    })

    it('button onClick should call setPlayerChoice', () => {
      const { output, props } = setup()

      const buttonProps = output.props.children.props;

      buttonProps.onClick()
      expect(props.setPlayerChoice).toHaveBeenCalled({
        type: SET_PLAYER_CHOICE,
        rpsType: 'test'
      })
    })
  })
})
