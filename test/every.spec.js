import foreach from '@/js/foreach';
import every from '@/js/every';


jest.mock('@/js/sum');
import sum from '@/js/sum';

describe('mock test', ()=>{

  it('test foreach use mock', ()=>{
    const fn = jest.fn()

    foreach([1,2,3], fn)

    expect(fn.mock.calls.length).toBe(3)

    expect(fn.mock.calls[2][0]).toBe(3)
  })

  it('test every use mock return value', () => {
    const fn = jest.fn();

    // 可以设置返回值
    fn
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);

    const res = every([1, 2, 3, 4], fn);
    expect(fn.mock.calls.length).toBe(2);
    expect(fn.mock.calls[1][1]).toBe(1);
  })

  it('test every use mock mockImplementationOnce', () =>{
   // 快速定义mock的函数体，方便测试
    const fn = jest.fn((val, index) => {
        if(index == 2) {
            return false;
        }
        return true;
    });

    const res = every([1, 2, 3, 4], fn);
    expect(fn.mock.calls.length).toBe(3);
    expect(fn.mock.calls[1][1]).toBe(1);
  })

})