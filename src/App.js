import React, { useEffect, useState } from 'react';
import API from './API';
import Blog from './Blog';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('')
      .then((response) => {
        const data = response.data;
        setBlogs(data);
      })
      .catch((error) => console.log('Error', error));
  }, []);

  return (
    <div className="row u-align--center u-equal-height container">
      {blogs.length !== 0 ? (
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            heading={blog._embedded['wp:term'][2][0]?.name || blog._embedded['wp:term'][1][0]?.name}
            image={blog.featured_media}
            title={blog.title.rendered}
            link={blog.link}
            authorName={blog._embedded.author[0].name}
            authorLink={blog._embedded.author[0].link}
            date={blog.date}
            type={blog.type}
          />
        ))
      ) : (
        <div>No blogs...</div>
      )}
    </div>
  );
}

export default App;
