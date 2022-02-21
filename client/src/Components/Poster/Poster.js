//import './base.scss';
//import Tag from '../Tag/Tag'

function Poster({ poster }) {
  return (
    <div className="poster">
      <div class="poster__content">
        <img src={poster.image} className="poster__image" alt="logo" />
        <a href="" className="poster__title">
          {poster.title}
        </a>
        <a href="" className="poster__director">
          {poster.director}
        </a>
        <p className="poster__rate">{poster.rate}</p>
      </div>
      <div className="poster__categories">
        {poster.categories.map((category) => (
          <Tag key={category} item={category}></Tag>
        ))}
      </div>
    </div>
  );
}

export default Poster;
