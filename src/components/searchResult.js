function SearchResult({ video }) {
  const { thumbnail, title, description, id, channelName } = video;

  return (
    <div className="my-3">
      <a
        className="flex gap-3"
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="rounded" src={thumbnail} alt={title} width="200" />
        <div>
          <h4 className="font-bold">{title}</h4>
          <span className="text-gray-600 text-xs">{channelName}</span>
          <p className="text-xs">{description}</p>
        </div>
      </a>
    </div>
  )
}

export default SearchResult;
