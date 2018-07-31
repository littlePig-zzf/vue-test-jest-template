// import { shallowMount } from '@vue/test-utils'
// import Message from '@/components/Message.vue'

// describe('Message', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(Message, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toBe(msg)
//   })

//   it('renders default message if not passed a prop', () => {
//     const defaultMessage = 'default message'
//     const wrapper = shallowMount(Message)
//     expect(wrapper.text()).toBe(defaultMessage)
//   })
// })
//
import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'

describe('Message.test.js', ()=>{
  let cmp
  const createCmp = propsData => shallowMount(Message, { propsData })
  describe('Properties', ()=>{
    it('has a message property', () => {
      cmp = createCmp({ message: 'hey' })
      expect(cmp.props('message', 'hey')).toBeTruthy()
    })
  })

  describe('Validation', () => {
    const message = createCmp().vm.$options.props.message

    it('message is of type string', () => {
      expect(message.type).toBe(String)
    })

    // it('calls handleClick when click on message', () => {
    //   cmp.vm.handleClick = jest.fn()
    //   cmp.update()

    //   const el = cmp.find('.message').trigger('click')
    //   expect(cmp.vm.handleClick).toBeCalled()
    // })

    it('message is required', () => {
      expect(message.required).toBeTruthy()
    })

    // it('message has at least length 2', () => {
    //   expect(message.validator && message.validator('a')).toBeFalsy()
    //   expect(message.validator && message.validator('aa')).toBeTruthy()
    // })

  })

  describe('Events', () => {
    beforeEach(() => {
      cmp = createCmp({ message: 'Cat' })
    })

    it('calls handleClick when click on message', () => {
      const stub = jest.fn()
      cmp.setMethods({ handleClick: stub })

      const el = cmp.find('.message').trigger('click')
      expect(stub).toBeCalled()
    })

    it('triggers a message-clicked event when a handleClick method is called', ()=>{
      const stub = jest.fn()
      cmp.vm.$on('message-clicked', stub)  //手动绑定事件
      cmp.vm.handleClick()  //触发事件

      expect(stub).toBeCalledWith('Cat')
    })

  })
})
