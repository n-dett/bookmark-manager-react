export default function ConfirmDeleteCategoryModal() {
    return (
        <div className="modal-background hidden" id="delete-category-modal-bgd">
        <div id="delete-category-modal" className="modal">
            <div className="close-btn-container">
                <button type="button" className="close-btn">✕</button>
            </div>
            <div className="delete-message-container">
                <h3 id="delete-category-message">
                    Are you sure you want to delete the 
                    <span id="modal-message-category">category</span> for 
                    <span 
                        className="modal-message-name" 
                        id="delete-category-name">
                            Category Name
                    </span> 
                    and all its bookmarks?
                </h3>
            </div>
            <button 
                type="button" 
                className="submit-form-btn" 
                id="submit-delete-category">
                    Delete
            </button>
        </div>
    </div>
    )
}