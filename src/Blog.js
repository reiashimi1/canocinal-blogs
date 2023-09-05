import React, { useMemo } from 'react';
import moment from 'moment';

const Blog = ({ heading, image, title, link, authorName, authorLink, date, type }) => {
  const formattedDate = useMemo(() => moment(date).format('DD MMMM YYYY'), [date]);

  return (
    <div className="col-4 col-medium-3 p-card u-align-text--left u-no-padding blog">
      <div className="col">
        <h5 className="blog_header u-no-margin--bottom">{heading}</h5>
      </div>
      <div className="blog_content">
        <a href={link} target="_blank">
          <img src={image} alt="image" />
        </a>
        <a href={link} target="_blank">
          <h3 className="is-accent">{title}</h3>
        </a>
        <div className="p-heading--6">
          By{' '}
          <a href={authorLink} target="_blank" className="is-accent">
            {authorName}
          </a>{' '}
          on {formattedDate}
        </div>
      </div>
      <div className="blog_footer">{type}</div>
    </div>
  );
};

export default Blog;
