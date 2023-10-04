const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
console.log(pilotos)

pilotos.pop() // remove o último elemento da lista
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento no vetor
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento no inicio do vetor
console.log(pilotos)

// O splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)


// o slice pega uma parte do array onde o primeiro índice entra no intervalo e o segundo não faz parte do novo vetor gerado.
const algunsPilotos1 = pilotos.slice(2) // novo array gerado a partir desse método
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)