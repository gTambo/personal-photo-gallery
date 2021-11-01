# Gallery of my life, by Greg

## Description


This app was written in React. I utilized components and jsx syntax, along with ajax in the form of axios to build a small gallery of photos. Using click handlers and useState and useEffect hooks from react, I built in functionality for a user to view all photos on one page, click on a like button corresponding to each photo, and with conditional rendering, they can also click on the photo itself to reveal a brief description of its contents.

I employed Material UI for some styling.

## Technoliogies Used

- React
- JavaScript
- AJAX
- expressJS
- Material-UI
- CSS
- HTML

## Checklist

- [x] source in Photos and add to server data.js array
- [x] complete setup (checking file paths, imports, installing, etc)
- [x] App.js GET as annonymous func assigned to const
- [x] useEffect function, build initial jsx for rendering gallery
    - [x] source image from server calling GET, use mapping
    - [x] structure result in some kind of div
- [x] App.js PUT as const for likes
    - [x] axios request
    - [x] jsx structure for like 'button' 
- [x] build GalleryList component with for loop over gallery data
- [x] build GalleryItem component base to receive individual gallery item
- [x] source GalleryItem into GalleryList
- [x] conditional rendering for photo descriptions
- [x] move buttons to appropriate components for rendering
- [x] remember to render with new data (call get items), new likes
- [x] css components and sourcing
- [x] Header and Footer components
- [x] basic css styling for page
- [x] extra css styling for pages (components)
- [x] **__ADD MORE COMMENTS!!!__**

## Stretch goals

- [ ] (git branch features) 
- [x] database feature initial branch
- [x] database build, sql file
- [x] move server array items into DB
- [x] re-route as necessary (GET anPUT edits)
- [x] form feature initial branch
- [x] build form component
- [x] client handleSubmit
- [x] client POST for new image
- [x] write server POST
- [ ] delete feature git branch
- [ ] DELETE req on client
- [ ] delete button in GalleryItem
- [ ] DELETE on server
- [ ] research material UI
- [ ] implement material UI css on git branch
- [ ] research uppy
- [ ] implement new image upload on Git branch
