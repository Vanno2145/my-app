import './Book.css';

export function Book(){
    let Book = {
        name: "Норвежский лес",
        author: "Харуки Мураками",
        genre: "Роман",
        pages: 384,
        review: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi accusantium maiores praesentium iste repellat illo, error molestias dignissimos aspernatur?",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, neque.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, consectetur a commodi qui error illum?"
        ]
    }

    return(
        <div id='cont'>
            <p>Name: {Book.name}</p>
            <p>Author: {Book.author}</p>
            <p>Pages: {Book.genre}</p>
            <p>Pages: {Book.pages}</p>
            <p>Reviews: </p>
            <div>
                <p>{Book.review[0]}</p>
                <p>{Book.review[1]}</p>
                <p>{Book.review[2]}</p>
            </div>
        </div>
    );
}