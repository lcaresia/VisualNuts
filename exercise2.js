const countries = [
    {
        country: "US",
        languages: ["en"]
    },
    {
        country: "BE",
        languages: ["nl", "fr", "de"]
    },
    {
        country: "NL",
        languages: ["nl", "fy"]
    },
    {
        country: "DE",
        languages: ["de"]
    },
    {
        country: "ES",
        languages: ["es"]
    }
]


const getInfos = () => {
    const totalCountriesQuantity = countries.length
    const mostOfficialLanguagesCountry = countries.filter(({ languages }) => languages.includes('de')).sort((a, b) => b.languages.length - a.languages.length)[0]
    const totalSpokenLanguagesQuantity = countries.reduce((sum, { languages }) => sum + languages.length, 0)
    const mostLanguagesCountry = countries.sort((a, b) => b.languages.length - a.languages.length)[0]

    
    let languagesCount = {}

    countries.map(({ languages }) => languages.map(language => {
        if (!languagesCount[language]) languagesCount[language] = 1
        else languagesCount[language] += 1
    }))

    let mostCommonLanguage = null
    let mostCommonLanguageQuantity = 0

    for (const key in languagesCount) {
        if (!mostCommonLanguage || languagesCount[key] > mostCommonLanguageQuantity) {
            mostCommonLanguage = key
            mostCommonLanguageQuantity = languagesCount[key]
        }
    }

    return {
        totalCountriesQuantity,
        mostOfficialLanguagesCountry,
        totalSpokenLanguagesQuantity,
        mostLanguagesCountry,
        mostCommonLanguage
    }
}

console.log(getInfos())