import { MyHashMap } from '.'

describe(MyHashMap, () => {
  it('case 1', () => {
    const myHashMap = new MyHashMap()
    myHashMap.put(1, 1) // The map is now [[1,1]]
    myHashMap.put(2, 2) // The map is now [[1,1], [2,2]]
    expect<number>(myHashMap.get(1)).toBe<number>(1) // return 1, The map is now [[1,1], [2,2]]
    expect<number>(myHashMap.get(3)).toBe<number>(-1) // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
    myHashMap.put(2, 1) // The map is now [[1,1], [2,1]] (i.e., update the existing value)
    expect<number>(myHashMap.get(2)).toBe<number>(1) // return 1, The map is now [[1,1], [2,1]]
    myHashMap.remove(2) // remove the mapping for 2, The map is now [[1,1]]
    expect<number>(myHashMap.get(2)).toBe<number>(-1) // return -1 (i.e., not found), The map is now [[1,1]]
  })
})
