let text =
  "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."

text = text.toLowerCase()

countA = 0
countE = 0
countI = 0
countO = 0
countU = 0
countY = 0
countVowels = 0

for (let i = 0; i < text.length; i++) {
  switch (text[i]) {
    case "a":
      countA += 1
      break
    case "à":
      countA += 1
      break
    case "e":
      countE += 1
      break
    case "é":
      countE += 1
      break
    case "è":
      countE += 1
      break
    case "ê":
      countE += 1
      break
    case "i":
      countI += 1
      break
    case "o":
      countO += 1
      break
    case "u":
      countU += 1
      break
    case "y":
      countY += 1
      break
  }
}
console.log(`nb E: ${countE}`)
console.log(`nb A: ${countA}`)
console.log(`nb I: ${countI}`)
console.log(`nb O: ${countO}`)
console.log(`nb U: ${countU}`)
console.log(`nb Y: ${countY}`)
countVowels = countA + countE + countI + countO + countU + countY
console.log(`nb vowels: ${countVowels}`)
