let currentFloor = -2
let targetFloor = 5


switch (targetFloor) {
  case targetFloor > currentFloor:
    console.log(`Go up from the ${currentFloor}th floor to the ${targetFloor}th`)
    break
  case targetFloor < currentFloor:
    console.log(`Go down from the ${currentFloor}th floor to the ${targetFloor}th`)
    break
  case currentFloor === targetFloor:
    console.log(`You already are on the ${targetFloor}th floor`)
    break
}
