export default function Sidebar() {
    return (
        <div id="sidebar">
            <button type="button" id="sidebar-mobile-close">&#10005</button>
            <h1 id="nav-heading">Bookmark Manager</h1>
            <button id="add-category-btn">Add Category +</button>
            <button id="add-subcategory-btn">Add Subcategory +</button>
            <nav id="category-nav">
                <button className="category-btn category-name static">All</button>
                <button className="category-btn category-name static">Favorites</button>
                <div className="category-btns-container">
                    <button className="category-btn">
                        <span className="category-name">Category 1</span>
                        <span className="caret">▸</span>
                    </button>
                    <ul className="subcategory-list hidden">
                        <button className="subcategory-btn">Subcategory 1</button>
                        <button className="subcategory-btn">Subcategory 2</button>
                        <button className="subcategory-btn">Subcategory 3</button>
                    </ul>
                </div>
                <div className="category-btns-container">
                    <button className="category-btn">
                        <span className="category-name">Category 2</span>
                        <span className="caret">▸</span>
                    </button>
                </div>
            </nav>
        </div>
    )
}