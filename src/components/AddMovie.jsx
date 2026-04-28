import  { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';


const AddMovie = ({ addMovie }) => {

  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [language, setLanguage] = useState("")
  const [rating, setRating] = useState("")
  const [poster, setPoster] = useState("")

  const handleSubmit = () => {

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      language,
      rating,
      poster
    }

    addMovie(newMovie)

    // reset
    setTitle("")
    setGenre("")
    setLanguage("")
    setRating("")
    setPoster("")
  }

  return (
    <>
      {/* Button (top right) */}
      <div style={{ display: "flex", justifyContent: "flex-end", margin: "20px" }}>
        <button 
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#addMovieModal"
        >
          Add Movie
        </button>
      </div>

      {/*  Modal */}
      <div className="modal fade" id="addMovieModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">Add New Movie</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body">

              <input className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

              <input className="form-control mb-2" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

              <input className="form-control mb-2" placeholder="Language" value={language} onChange={(e) => setLanguage(e.target.value)} />

              <input className="form-control mb-2" type="number" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />

              <input className="form-control mb-2" placeholder="Poster URL" value={poster} onChange={(e) => setPoster(e.target.value)} />

            </div>

            <div className="modal-footer">
              <button className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

              <button 
                className="btn btn-primary" 
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Save Movie
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AddMovie