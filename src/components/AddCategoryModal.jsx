export default function AddCategoryModal() {
    return (
        <div className="modal-background hidden" id="add-category-modal-bgd">
        <form id="add-category-form" className="modal">
            <div className="close-btn-container">
                <button 
                    type="button" 
                    className="close-btn">
                        ✕
                </button>
            </div>
            <h1>Add Category</h1>
            <div>
                <label for="new-category-name">Category Name</label>
                <input 
                    type="text" 
                    id="new-category-name" 
                    maxlength="50"
                />
            </div>
            <button 
                type="button" 
                className="submit-form-btn" 
                id="submit-new-category">
                    Add
            </button>
        </form>
    </div>
    )
}