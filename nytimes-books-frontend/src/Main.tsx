import { useState} from 'react';
import TopRankBooks from './components/TopRankBooks'
import AllNamesList from './components/AllNamesList';
import { Book } from './interfaces/Books'

export type TBookLists = Book[];
const Main = () => {

  const [selectedListName, setSelectedListName] = useState('');

  const handleNameChange = (listName: any) => {
    setSelectedListName(listName);
  }

  return (
    <>
      <header id="page-header"><h2>NY-Times Books</h2></header>
      <header id="list-header">
          <AllNamesList handleNameChange={handleNameChange} />
      </header>
      <article id="main-article">
        <div className="card-container">
          {selectedListName ? (<TopRankBooks selectedListName={selectedListName} />) : ('')}
        </div>
      </article>
    </>
  );

}
export default Main;
