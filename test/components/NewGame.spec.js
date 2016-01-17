import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import NewGame from '../../components/NewGame'
import { rpsTypesArray } from '../../constants/RpsTypes';
import { START_NEW_GAME } from '../../constants/ActionTypes'
import { GAME_OUTCOMES } from '../../constants/GameOutcomes';

function setup(propOverrides) {
  const props = Object.assign({
    game: {
      rpsType: null,
      computerChoice: null,
      gameOutcome: null
    },
    actions: {
      startNewGame: expect.createSpy()
    }
  }, propOverrides)

  const renderer = TestUtils.createRenderer()

  renderer.render(
    <NewGame {...props} />
  )

  let output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('NewGame', () => {
    it('Should be null as a game is in progress', () => {
      const { output } = setup()

      expect(output).toBe(null)
    })

    it("Should render 'start new game' button and send 'startNewGame' action on click", () => {
      const customProps = {
        game: {
          rpsType: rpsTypesArray[0],
          computerChoice: rpsTypesArray[0],
          gameOutcome: GAME_OUTCOMES.DRAW
        },
        actions: {
          startNewGame: expect.createSpy()
        }
      }

      const { output, props } = setup(customProps)

      const button = output.props.children[1]
                      .props.children[1]
                      .props.children

      expect(button.type).toBe('button');

      button.props.onClick();

      expect(props.actions.startNewGame).toHaveBeenCalled()
    })


  })
})
