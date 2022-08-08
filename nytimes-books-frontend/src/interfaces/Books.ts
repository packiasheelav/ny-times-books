export interface Links {
    name: string;
    url: string;
  }
  export interface ListNames {
    list_name: string,
    display_name: string,
    list_name_encoded: string,
    oldest_published_date: string,
    newest_published_date: string,
    updated: string
  }
  export interface Book {
    age_group: string,
    amazon_product_url: string,
    article_chapter_link: string,
    asterisk: number,
    author: string,
    book_image: string,
    book_image_height: number,
    book_image_width: number,
    book_review_link: string,
    book_uri: string,
    buy_links: Array<Links>
    contributor: string,
    contributor_note: string,
    dagger: 0
    description: string,
    first_chapter_link: string,
    price: string,
    primary_isbn10: string,
    primary_isbn13: string,
    publisher: string,
    rank: number,
    rank_last_week: number,
    sunday_review_link: string,
    title: string,
    weeks_on_list: number
  }