export function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>()
  let queue: number[] = [0]

  while (queue.length) {
    const roomNumber = queue.shift()
    if (roomNumber == null) throw new Error('something went wrong')
    if (visited.has(roomNumber)) continue
    visited.add(roomNumber)
    queue = queue.concat(rooms[roomNumber])
  }

  return rooms.length === visited.size
}
