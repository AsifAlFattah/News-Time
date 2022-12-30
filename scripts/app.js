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
            <img src="${news.thumbnail_url}" alt=" " width="300px" height="300px" class="img p-3 rounded">
            <div class="p-4 d-flex flex-column align-content-between">
                <h4 class="fw-semibold mb-5">${news.title}</h4>
                <p>${news.details.slice(0,400)}...</p>
                <div class="d-flex justify-content-between">
                    <div class="author-div d-flex">
                        <img src="${news.author.img}" alt=" " width="50px" height="50px" class="rounded-5 ">
                        <div class="px-2">
                            <h5 class="mb-0 pb-0">${news.author.name}</h5>
                            <p>${news.author.published_date}</p>
                        </div>
                    </div>
                    <div class="views-div">
                        <p class="fw-semibold"><i class="fa-regular fa-eye mx-1"></i> ${news.total_view}</p>
                    </div>
                    <div class="rating div">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div class="details-div">
                        <button class="border-0 bg-white" onclick="showDetails('${news._id}')">
                            <i class="fa-solid fa-arrow-right fs-2 px-4 "></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        newsContainer.appendChild(newsDiv);
    }
};

// Show Detailed Post
const showDetails = (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    console.log(url);
};

loadAllCategories();