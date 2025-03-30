export default function AddBookmarkModal() {
    <div className="modal-background hidden" id="add-bookmark-modal-bgd">
        <form id="add-bookmark-form" className="modal">
            <div className="close-btn-container">
                <button type="button" className="close-btn">&#10005</button>
            </div>
            <h1>Add Bookmark</h1>
            <div>
                <label for="new-bookmark-name">Bookmark Name</label>
                <input 
                    type="text" 
                    id="new-bookmark-name" 
                    maxlength="65"
                />
            </div>
            <div>
                <label for="new-bookmark-url">URL</label>
                <input 
                    type="text" 
                    id="new-bookmark-url" 
                    placeholder="Copy and paste URL"
                />
            </div>
            <div>
                <label for="new-bookmark-category-dropdown">Category</label>
                <select 
                    name="new-bookmark-category-dropdown" 
                    id="new-bookmark-category-dropdown" 
                    className="categories"
                >
                    <option value="">None</option>
                </select>
            </div>
            <div>
                <label for="new-bookmark-subcategory-dropdown">Subcategory</label>
                <select 
                    name="new-bookmark-subcategory-dropdown" 
                    id="new-bookmark-subcategory-dropdown" 
                    className="subcategories"
                >
                    <option value="">None</option>
                </select>
            </div>
            <button type="button" className="submit-form-btn" id="submit-new-bookmark">Add</button>
        </form>
    </div>
}