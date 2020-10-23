import React from 'react'
import { shallow } from 'enzyme'
import Button from '../Button'

describe('<Button />', () => {
  it('renders children correctly', () => {
    const MockCmp = () => null
    const wrapper = shallow(
      <Button>
        <MockCmp />
      </Button>
    )
    expect(wrapper.find(MockCmp).exists()).toBe(true)
  })
})
