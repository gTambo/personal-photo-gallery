

function AddImage (props) {
    return (
        <section className="new-image-section">
           <form onSubmit={props.handleSubmit}>
          <label>
            Image URL
          </label>
          <input
            type="text"
            placeholder="Url here"
            value={props.imagePath}
            onChange={(evt) => props.setImagePath(evt.target.value)}
          />
          <div>
~            Would this guest like a kid's meal?
            <div >
              <div>
                <label>
                  <input
                    type="radio"
                    value={true}
                    checked={props.newGuestMeal === 'true'}
                    name="kidsMeal"
                    onChange={(evt) => props.setNewGuestMeal(evt.target.value)}
                  />
                  Yes, this guest would like a Kid's Meal
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="radio"
                    value={false}
                    checked={props.newGuestMeal === 'false'}
                    name="kidsMeal"
                    onChange={(evt) => props.setNewGuestMeal(evt.target.value)}
                  />
                  No, this guest would not like a Kid's Meal
                </label>
              </div>
            </div>
          </div>
          <button type="submit">Add Guest</button>
        </form>
        </section>
    )
}
