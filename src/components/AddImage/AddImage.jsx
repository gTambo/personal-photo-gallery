import './AddImage.css';

function AddImage (props) {
    return (
        <section className="new-image-section">
            <p>Add a new Photo!</p>
           <form onSubmit={props.handleSubmit}>
            <label>
                Image URL: &nbsp;
            </label>
            <input
                type="text"
                placeholder="Url here"
                value={props.imagePath}
                onChange={(evt) => props.setImagePath(evt.target.value)}
            />
            <div>
            <label>
                Image Description: &nbsp;
            </label>
            <input
                type="text"
                placeholder="Describe the Photo"
                value={props.imageDescription}
                onChange={(evt) => props.setImageDescription(evt.target.value)}
            />
            </div>
            <button type="submit">Add New Photo</button>
            </form>
        </section>
    )
}

export default AddImage;