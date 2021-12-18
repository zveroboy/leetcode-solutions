import { MyHashSet } from '.'

describe(MyHashSet, () => {
  it('case 1', () => {
    const myHashSet = new MyHashSet()
    myHashSet.add(1) // set = [1]
    myHashSet.add(2) // set = [1, 2]
    expect(myHashSet.contains(1)).toBe(true) // return True
    expect(myHashSet.contains(3)).toBe(false) // return False, (not found)
    myHashSet.add(2) // set = [1, 2]
    expect(myHashSet.contains(2)).toBe(true) // return True
    myHashSet.remove(2) // set = [1]
    expect(myHashSet.contains(2)).toBe(false) // return False, (already removed)
  })
})
