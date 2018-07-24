import { shallowMount } from '@vue/test-utils'
import Message from '@/components/Message.vue'
import MessageList from '@/components/MessageList.vue'

describe('MessageList.test.js', ()=>{
  let cmp
  const createCmp = propsData => shallowMount(MessageList, { propsData })
  beforeEach(() => {
    cmp = createCmp({ messages: 'dog' })
  })
  it('Calls handleMessageClick when @message-click happens', ()=>{
    const stub = jest.fn()
    cmp.setMethods({ handleMessageClick: stub })
    cmp.update()  //需改变组件模板，则需使用update()来更新

    const el = cmp.find(Message).vm.$emit('message-clicked', 'cat')  //手动触发事件
    expect(stub).toBeCalledWith('cat')  //期望调用上述的handleMessageClick事件，通过toBeCalledWith传递参数
  })
 })