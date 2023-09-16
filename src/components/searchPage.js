import SearchResult from './searchResult';

const SearchPage = ({ videos }) => {
  return (
    <div className="m-3">
      <h3 className="font-bold">YouTube Search Results:</h3>
      <ul>
        {videos.map((video) => (
          <li>
            <SearchResult video={video} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
