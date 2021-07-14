import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import { flatten, pathOr } from 'ramda';
import { fetchSearchResults, debounce } from './lib/searchUtil';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
const cx = classNames.bind(styles);

const Search = () => {
  const [results, setSearchResults] = useState([]);
  const onChange = debounce(async (e) => {
    const results = await fetchSearchResults(e.target.value, 4);
    const hits = results
      .filter((r) => pathOr(0, ['hits', 'total'], r) > 0)
      .map((r) =>
        pathOr([], ['hits', 'hits'], r)
          .filter((h) => h._type === 'spot')
          .map((h) => ({ spotId: h._id, name: h._source.name }))
      );
    setSearchResults(flatten(hits));
  });

  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <h3>Search:</h3>
        <input type="text" onChange={onChange} />
      </div>
      <div className={cx({ results: results.length > 0 })}>
        {results.map((r) => (
          <Link
            className={styles.searchLink}
            key={r.spot_id}
            to={`/surf?spot_id=${r.spotId}`}
          >
            {r.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
