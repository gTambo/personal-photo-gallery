import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList ({ list, likePhoto}) {

    return (
        <>
                
            {list.map(photo => (
                <div key={photo.id} className="App-photo">
                <GalleryItem photo={photo}
                            likePhoto={likePhoto}
                />
                </div>
                ))}
        </>
    )
}

export default GalleryList;