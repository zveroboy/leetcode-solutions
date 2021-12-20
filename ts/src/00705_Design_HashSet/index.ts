import { hash } from '../utils/hash'

export class MyHashSet {
  len = 97
  prime = 89
  values: number[][]
  constructor() {
    this.values = []
  }

  private hash(n: number) {
    return hash(this.prime, this.len)(n)
  }

  private getBucket(key: number): number[] {
    const hash = this.hash(key)
    this.values[hash] ??= []
    return this.values[hash]
  }

  add(key: number): void {
    const bucket = this.getBucket(key)
    if (!bucket?.includes(key)) {
      bucket.push(key)
    }
  }

  remove(key: number): void {
    const bucket = this.getBucket(key)
    const index = bucket?.indexOf(key)
    delete bucket?.[index]
  }

  contains(key: number): boolean {
    return this.getBucket(key)?.includes(key) ?? false
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
