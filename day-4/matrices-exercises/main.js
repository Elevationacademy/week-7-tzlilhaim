// ===========================Spot Checks===========================
// Spot check 1:
let matrix_sc1 = [[1, 2], [3, 4], [5, 6], [7, 8], [9]]

// ============================================

function generateMatrix(numRows, numColumns) {
  let matrix = []
  let num = 1

  for (let r = 0; r < numRows; r++) {
    matrix.push([])
    for (let c = 0; c < numColumns; c++) {
      matrix[r].push(num++)
    }
  }
  return matrix
}

// Spot check 2:
const printMetrix = (matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      console.log(matrix[row][col])
    }
  }
}

const matrix = generateMatrix(4, 8)
printMetrix(matrix)

// Spot check 3:
const get = (rowNum, colNum) => {
  return matrix[rowNum][colNum]
}

console.log(get(2, 2))

// Spot check 4:
const print = (m) => {
  let output = ""
  for (let row = 0; row < matrix.length; row++) {
    output += "\n"
    for (let col = 0; col < matrix[row].length; col++) {
      output += get(row, col) + "\t"
    }
  }
  console.log(output)
}

print(matrix)

// Spot check 5:
const printRow = (rowNum) => {
  let output = ""
  for (let col = 0; col < matrix[rowNum].length; col++) {
    output += get(rowNum, col) + "\t"
  }
  console.log(output)
}

printRow(2)

// Spot Check 6:
const alter = (row, col, newValue) => {
  matrix[row][col] = newValue
}

console.log("before alteration: " + get(2, 2))
alter(2, 2, 100)
console.log("before alteration: " + get(2, 2))
