import { hash } from '../utils/hash'

type MapTuple = [key: number, value: number]

const createPredicate = (key: number) => (tuple?: MapTuple) =>
  tuple?.[0] === key

export class MyHashMap {
  len = 97
  prime = 89
  values: MapTuple[][]
  constructor() {
    this.values = []
  }

  private hash(n: number) {
    return hash(this.prime, this.len)(n)
  }

  private getBucket(key: number): MapTuple[] {
    const hash = this.hash(key)
    this.values[hash] ??= []
    return this.values[hash]
  }

  private find(key: number): MapTuple | undefined {
    return this.getBucket(key).find(createPredicate(key))
  }

  put(key: number, value: number): void {
    const found = this.find(key)
    if (found) {
      found[1] = value
    } else {
      this.getBucket(key).push([key, value])
    }
  }

  get(key: number): number {
    const found = this.find(key)
    return found?.[1] ?? -1
  }

  remove(key: number): void {
    const bucket = this.getBucket(key)
    const index = bucket?.findIndex(createPredicate(key))
    delete bucket?.[index]
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
