export default function ConfirmDeleteBookmark() {
    return (
        <div className="modal-background hidden" id="delete-bookmark-modal-bgd">
            <div id="delete-bookmark-modal" className="modal">
                <div className="close-btn-container">
                    <button 
                        type="button" 
                        className="close-btn"
                    >
                        ✕
                    </button>
                </div>
                <div className="delete-message-container">
                    <h3 id="delete-bookmark-message">
                        Are you sure you want to delete the bookmark for 
                        <span 
                            id="delete-bookmark-name" 
                            className="modal-message-name">
                                The Bookmark Name Here
                        </span>?
                    </h3>
                </div>
                <div>
                </div>
                <button 
                    type="button" 
                    className="submit-form-btn" 
                    id="submit-delete-bookmark">
                        Delete
                </button>
            </div>
        </div>
    )
}