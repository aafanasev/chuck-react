const URLS = {
    CATEGORIES: "https://api.chucknorris.io/jokes/categories",
    RANDOM_FACT: "https://api.chucknorris.io/jokes/random",
    RANDOM_CATEGORY_FACT: "https://api.chucknorris.io/jokes/random?category={category}",
    SEARCH: "https://api.chucknorris.io/jokes/search?query={query}",
};

export const Repository = {

    getCategories() {
        return fetch(URLS.CATEGORIES)
            .then(response => response.json())
            .catch(error => console.error(error))
    },

    getRandomFact() {
        return fetch(URLS.RANDOM_FACT)
            .then(response => response.json())
            .catch(error => console.error(error))
    },

}