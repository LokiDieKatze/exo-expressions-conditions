let password = '1a2b!AZEAZEAZEAZEAZEAZEAZ'
let msg = ''

if ((password[0] === '1') && (password[1] === 'a') && (password[2] === '2') && (password[3] === 'b') && (password[4] === '!') && (password.length > 13)) {
  console.log('Good')
} else {
  console.log('Bad')
}
