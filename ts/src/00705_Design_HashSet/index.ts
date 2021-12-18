export class MyHashSet {
  len = 97
  prime = 89
  values: number[][]
  constructor() {
    this.values = []
  }

  hash(n: number) {
    let total = 0
    while (n > 0) {
      const d = n % 10
      total = (total * this.prime + d) % this.len
      n -= d
      n /= 10
    }
    return total
  }

  add(key: number): void {
    const hash = this.hash(key)
    this.values[hash] ??= []
    if (!this.values[hash]?.includes(key)) {
      this.values[hash].push(key)
    }
  }

  remove(key: number): void {
    const hash = this.hash(key)
    const index = this.values[hash]?.findIndex(key)
    delete this.values[hash]?.[index]
  }

  contains(key: number): boolean {
    const hash = this.hash(key)
    return this.values[hash]?.includes(key) ?? false
  }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
