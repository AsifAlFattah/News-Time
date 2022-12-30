// Load Categories
const loadAllCategories = async () =>{
    const url = 'https://openapi.programming-hero.com/api/news/categories';
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayAllCategories(data.data.news_category);
    }
    catch(error){
        console.log(error);
    }
};

// Display Categories
const displayAllCategories = (categories) =>{
    console.log(categories);
    const categoriesContainer = document.getElementById('categories-container');
    for(const category of categories){
        const categoryLink = document.createElement('a');
        categoryLink.classList.add('navbar-brand', 'mx-3', 'text-muted', 'text-decoration-none', 'fw-semibold', 'fs-4');
        categoryLink.href = '#';
        categoryLink.innerText = `${category.category_name}`;
        categoriesContainer.appendChild(categoryLink);
    }
};

loadAllCategories();