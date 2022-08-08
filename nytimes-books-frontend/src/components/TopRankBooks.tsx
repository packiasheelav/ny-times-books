import { useState, useEffect } from "react";
import { UseDataFetching } from '../useDataFetching';
import { Book } from '../interfaces/Books';
import Reviews from './Reviews';

export type TBookLists = Book[];

const TopRankBooks = (props: any) => {


    const [booksLists, setBooksLists] = useState<TBookLists>([]);
    const [review, setReview]= useState('');

    const [data, error, loading] = UseDataFetching(`http://127.0.0.1:9090/api/ranks/${props.selectedListName}`)

    useEffect(() => {
        if (data) {
            setBooksLists(data.results.books);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);

    useEffect(() => {
        if (loading) {
            console.log("Fetching Books...");
        }
    }, [loading]);

    const showReviews = (isbn:any) => {
        setReview(isbn)
    }

    const handlecloseReviews = ()=>{

        setReview('')
    };

    return (
        <>
            {loading ? ('Loading...') : (booksLists?.map((book: Book, index: number) => {
                const {
                    author,
                    book_image,
                    buy_links,
                    description,
                    primary_isbn10,
                    publisher,
                    rank,
                    title,
                } = book

                return <div key={index} className="card">
                    <img
                        className='book-image'
                        width={300}
                        height={485}
                        src={book_image}
                        alt="new"
                    />
                    <div className="card-title">{title}</div>
                    <div className="card-text">
                        {description}
                    </div>
                    <Reviews isbn={review} handlecloseReviews={handlecloseReviews} showReviews={showReviews}/>
                </div>
            }))}
        </>
    );
}
export default TopRankBooks;
