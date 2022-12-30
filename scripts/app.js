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
    const categoriesContainer = document.getElementById('categories-container');
    for(const category of categories){
        const categoryLink = document.createElement('a');
        categoryLink.classList.add('rounded', 'p-2', 'mx-2', 'text-muted', 'text-decoration-none', 'fw-semibold', 'fs-4');
        categoryLink.addEventListener('click',function(){
            loadNews(category.category_id);
        });
        categoryLink.innerText = `${category.category_name}`;
        categoriesContainer.appendChild(categoryLink);
    }
};

// Load News
const loadNews = async (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    try{
        const res = await fetch(url);
        const data = await res.json();
        showNews(data.data);
    }
    catch(error){
        console.log(error);
    }

};

// Show News
const showNews = (newses) =>{
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    for(const news of newses){
        console.log(news);
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col-12','d-flex', 'p-2', 'm-3', 'bg-white', 'rounded');
        newsDiv.innerHTML = `
            <img src="${news.image_url}" alt=" " width="400px" height="400px" class="img p-3 rounded">
            <div class="p-4 ">
                <h4>${news.title}</h4>
            </div>
        `;
        newsContainer.appendChild(newsDiv);
    }
};



loadAllCategories();