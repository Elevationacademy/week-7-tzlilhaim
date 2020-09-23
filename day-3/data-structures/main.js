class UniqueArray {
  constructor() {
    this.length = 0
  }
  exists(item) {
    if (typeof item === "string") {
      const values = Object.values(this)
      return values.some((v) => v === item)
    } else {
      item = JSON.stringify(item)
      const values = Object.values(this)
      return values.some((v) => JSON.stringify(v) === item)
    }
  }
  add(item) {
    if (!this.exists(item)) {
      this[this.length] = item
      this.length++
    }
  }
  showAll() {
    return this
  }
  get(index) {
    return this[index]
  }
}

// Exercise 1:
const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
console.log(uniqueStuff.showAll()) //prints ["toy"]
uniqueStuff.add("toy")
console.log(uniqueStuff.showAll()) //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

// Extension:
uniqueStuff.add({ word: "cat" })
uniqueStuff.add({ word: "cat" })
console.log(uniqueStuff.showAll())
