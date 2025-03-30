export default function AddSubcategoryModal() {
    return (
        <div className="modal-background hidden" id="add-subcategory-modal-bgd">
            <form id="add-subcategory-form" className="modal">
                <div className="close-btn-container">
                    <button type="button" className="close-btn">✕</button>
                </div>
                <h1>Add Subcategory</h1>
                <div>
                    <label for="add-subcategory-category-dropdown">Category</label>
                    <select 
                        name="add-subcategory-category-dropdown" 
                        id="add-subcategory-category-dropdown" 
                        className="categories"
                    >
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <label for="new-subcategory-name">Subcategory Name</label>
                    <input 
                        type="text" 
                        id="new-subcategory-name" 
                        maxlength="70"
                    />
                </div>
                <button 
                    type="button" 
                    className="submit-form-btn" 
                    id="submit-new-subcategory">
                        Add
                </button>
            </form>
        </div>
    )
}