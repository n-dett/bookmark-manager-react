export default function MainContent() {
    return (
        <div id="main-content">
            <div id="main-content-header">
                <div id="category-heading-container">
                    <button id="delete-category-btn" className="hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"/></svg>
                    </button>
                    <h2 id="category-heading">All</h2>
                </div>
                <div id="add-subcategory-bookmark-container">
                    <button id="add-bookmark-btn">Add Bookmark +</button>
                </div>
            </div>

            {/* Bookmark Cards */}
            <div id="bookmarks-container">
                <div className="bookmark-card" data-index="0">
                    <div className="card-text">
                        <h3>
                            <a href="https://en.wikipedia.org/wiki/Main_Page" target="_blank">
                                Wikipedia
                            </a>
                        </h3>
                        <p className="url-text">https://en.wikipedia.org/wiki/Main_Page</p>
                    </div>
                    <div className="card-btns">
                        <button className="heart-btn">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24">
                                <path d="M20.808 11.079C19.829 16.132 12 20.5 12 20.5s-7.829-4.368-8.808-9.421C2.227 6.1 5.066 3.5 8 3.5a4.444 4.444 0 0 1 4 2 4.444 4.444 0 0 1 4-2c2.934 0 5.773 2.6 4.808 7.579z"/>
                            </svg>
                        </button>
                        <button className="edit-btn">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24">
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14-3 1 1-3 7-7 2 2z"/>
                            </svg>
                        </button>
                        <button className="delete-btn">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24">
                                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.707,12.293a1,1,0,1,1-1.414,1.414L12,13.414,9.707,15.707a1,1,0,0,1-1.414-1.414L10.586,12,8.293,9.707A1,1,0,0,1,9.707,8.293L12,10.586l2.293-2.293a1,1,0,0,1,1.414,1.414L13.414,12Z"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}