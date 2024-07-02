
type Recipe = {
    id: number;
    title: string;
    ingredients: string[];
    instructions: string;
    thumbnail: string;
};

type RecipesResponse = { recipes: Recipe[]; };

(async () => {
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseJsonBody: RecipesResponse = await response.json();
        console.log(responseJsonBody);
        responseJsonBody.recipes.forEach(recipe => console.log(recipe.title));
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
})();

