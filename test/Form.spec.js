import { shallowMount } from '@vue/test-utils'
import Form from '@/components/Form'

describe('Form.test.js', () => {
  let cmp

  beforeEach(()=>{
    cmp = shallowMount(Form)  //挂载组件
  })

  describe('Properties', () => {  //计算属性
    it('returns the string in normal order if reversed property is not true', () => {  //设置值 匹配值
      cmp.vm.inputValue = 'Yoo'
      expect(cmp.vm.reversedInput).toBe('Yoo')
    })

    it('returns the reversed string if reversed property is true', () => {
      cmp.vm.inputValue = 'Yoo'
      cmp.setProps({ reversed: true })
      expect(cmp.vm.reversedInput).toBe('ooY')
    })
  })

  describe('Watchers - inputValue', ()=>{  //监听watch
    let spy

    beforeAll(() => {  //测试之前进行监控
      spy = jest.spyOn(console, 'log')
    })

    afterEach(() => {  //每次都将之前的清掉
      spy.mockClear()
    })

    // it('is not called if value is empty (trimmed)', () => {
    // })

    // it('is not called if values are the same', () => {
    // })

    it('is called with the new value in other cases', next => {  //改变值，是否调用watch
      cmp.vm.inputValue = 'foo'
      cmp.vm.$nextTick(() => {
        expect(spy).toBeCalled()
        next()
      })
    })

    it('is not called if value is empty (trimmed)', next => {
      cmp.vm.inputValue = ' '
      cmp.vm.$nextTick(() => {
        expect(spy).not.toBeCalled()
        next()
      })
    })

    it('is not called if values are the same', next => {
      cmp = shallowMount(Form, { inputValue: 'foo' })
      cmp.vm.inputValue = 'foo'

      cmp.vm.$nextTick(()=>{
        expect(spy).not.toBeCalled()
        next()
      })
    })


  })
})