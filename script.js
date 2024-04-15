document.addEventListener('DOMContentLoaded', getDataCategories)

function getDataCategories() {
    
    
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
    fetch(url)
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((categoriesData)=>{
        showCategories(categoriesData.categories)
    });
};

function showCategories(categories) {
    const select = document.querySelector('#select');
    
    const defaultOption = document.createElement('option');
    defaultOption.text = "Categories";
    select.appendChild(defaultOption)
    

    categories.forEach(category => {
        const {strCategory} = category
        
        const option = document.createElement('option');
        option.value = strCategory;
        option.text = strCategory;

        select.appendChild(option);
    });   

    console.log(select);
}


/*-----FILTRADO-----*/

const select = document.querySelector('#select');
select.addEventListener('input', getDataFood)


function getDataFood() {
    option = select.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${option}`
    console.log(url);
    fetch(url)
    .then((respuesta)=>{
        return respuesta.json();
    })
    .then((foodsData)=>{
        showFoods(foodsData.meals)
    });
    
};

function showFoods(foods) {
    const resultados = document.querySelector('#resultados');
    let html = "";

    foods.forEach(food => {
        const {strMeal,strMealThumb} = food;
        html += `
        <div class ="cards">
            <img src = "${strMealThumb}">
            <h1>${strMeal}</h1>
        </div>
        `
        
    });

    resultados.innerHTML = html;
    
}



