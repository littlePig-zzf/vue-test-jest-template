import { shallowMount } from '@vue/test-utils'
import Count from '@/components/Count.vue'

describe('Count.vue', () =>{
  let cmp
  let spy
  const createCmp = propsData => shallowMount(Count, { propsData })

  beforeAll(()=>{
    cmp = createCmp()
    spy = jest.spyOn(console, 'log')
  })

  it('the value of all is equal expect value', () => {
    cmp.vm.arr = [2,3,4]
    const el = cmp.find('.calPlus').trigger('click')
    expect(cmp.vm.all).toEqual(19)
  })

  it('Determine whether the value is reversed', () => {
    cmp.vm.isReverse = true
    expect(cmp.vm.operate).toEqual('ooy')
  })

  it('set props match dom', () => {
    const arr = [1,2,3]
    cmp.setProps({ item: arr })  //直接设置
    // cmp = shallowMount(Count, {  //重新挂载组件设置
    //   propsData: {
    //     item: arr
    //   }
    // })
    expect(cmp.findAll('li')).toHaveLength(arr.length)
  })
})