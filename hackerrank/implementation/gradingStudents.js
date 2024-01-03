// Notas entre 0 e 100
// Menor que 40 = reprovado
// Arredonda para o próximo multiplo de 5 se a diferença é menor que 3
// Menor que 38 não arredonda e recebe nota baixa

const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
    let newGrades = []

    grades.forEach(e => {
        let nextMultiple = Math.floor(e / 5) * 5 + 5
        if (e < 38) {
            newGrades.push(e)
        } else if (nextMultiple - e < 3) {
            newGrades.push(nextMultiple)
        } else {
            newGrades.push(e)
        }
    });

    return newGrades

}

console.log(gradingStudents(grades));