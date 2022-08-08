import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

const NY_BASE_URL = "https://api.nytimes.com/svc/books/v3"
const NY_KEY = "M1xlavxPDBRtyUk9Jrbc9VIRHCSznvfz"

interface Name {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: Date;
    newest_published_date: Date;
    updated: Updated;
}

enum Updated {
    Monthly = "MONTHLY",
    Weekly = "WEEKLY",
}

interface CurrentBookList {
    list_name: string;
    list_name_encoded: string;
    bestsellers_date: Date;
    published_date: Date;
    published_date_description: string;
    next_published_date: string;
    previous_published_date: Date;
    display_name: string;
    normal_list_ends_at: number;
    updated: string;
    books: Book[];
    corrections: any[];
}

interface Book {
    rank: number;
    rank_last_week: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    description: string;
    price: string;
    title: string;
    author: string;
    contributor: string;
    contributor_note: string;
    book_image: string;
    book_image_width: number;
    book_image_height: number;
    amazon_product_url: string;
    age_group: string;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
    article_chapter_link: string;
    isbns: Isbn[];
    buy_links: BuyLink[];
    book_uri: string;
}

interface BuyLink {
    name: SellerName;
    url: string;
}

enum SellerName {
    Amazon = "Amazon",
    AppleBooks = "Apple Books",
    BarnesAndNoble = "Barnes and Noble",
    BooksAMillion = "Books-A-Million",
    Bookshop = "Bookshop",
    IndieBound = "IndieBound",
}

interface Isbn {
    isbn10: string;
    isbn13: string;
}

interface BookReview {
    url: string;
    publication_dt: Date;
    byline: string;
    book_title: string;
    book_author: string;
    summary: string;
    uuid: string;
    uri: string;
    isbn13: string[];
}

// get all Names list
const getNames = async (req: Request, res: Response) => {
    try {
        let result: AxiosResponse = await axios.get(`${NY_BASE_URL}/lists/names.json?api-key=${NY_KEY}`);
        let names: Name[] = result.data.results;
        return res.status(200).json({
            results: names
        });
    }
    catch (error) {
        console.log("Error :", error)
        return res.status(500).json({
            results: []
        });
    }
};

// get top rank book by list name
const getTopRankBooks = async (req: Request, res: Response) => {
    try {
        const list_name: string = req.params.list_name || '';
        const result: AxiosResponse = await axios.get(`${NY_BASE_URL}/lists/current/${list_name}?api-key=${NY_KEY}`);
        const results = result.data.results;
        let sortedBooks = results.books.sort((arank: Book, brank: Book) => {
            return arank.rank - brank.rank;
        }).slice(0, 10);
        results.books = sortedBooks
        return res.status(200).json({
            results: results
        });
    }
    catch (error) {
        console.log("Error :", error)
        return res.status(500).json({
            results: []
        });
    }
};

// get reviews by isbn
const getReviewsByISBN = async (req: Request, res: Response) => {
    try {
        const isbn: string = req.params.isbn || '';
        let result: AxiosResponse = await axios.get(`${NY_BASE_URL}/reviews.json?api-key=${NY_KEY}&isbn=${isbn}`);
        let bookreviews: [BookReview] = result.data;
        console.log(bookreviews);
        return res.status(200).json({
            results: bookreviews
        });
    }
    catch (error) {
        console.log("Error :", error);
        return res.status(500).json({
            results: []
        });
    }
};

export default { getNames, getTopRankBooks, getReviewsByISBN };