const printVisualNuts = (quantity) => {
    for (let i = 1; i <= quantity; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log(i, 'Visual Nuts')
        else if (i % 3 === 0) console.log(i, 'Visual')
        else if (i % 5 === 0) console.log(i, 'Nuts')
    }
}

printVisualNuts(100)
