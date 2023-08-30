import React from 'react';
import './ArticlePic.css';
import ArticleAuthor from './articleauthor'; // Make sure to use the correct file paths
import ArticleInfo from './articleinfo'; // Make sure to use the correct file paths
import ArticleName from './articlename'; // Make sure to use the correct file paths

const Data = [
    {
      name: 'Image 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit. ',
      author: 'Author 1',
      imageURL: "a.jpg"
    },
    {
      name: 'Image 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
      author: 'Author 2',
      imageURL: "b.jpg "
    },
    {
      name: 'Image 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
      author: 'Author 3',
      imageURL: "c.jpg"
    },
  ];

const ArticlePic = () => {
  return (
    <>
      <div className="articlephotos">
        {Data.map((article, index) => (
          <div key={index} className="imagedesc1">
            <img src={article.imageURL} alt={article.name} className="photo1" />
            <ArticleName name={article.name} />
            <ArticleInfo description={article.description} />
            <hr />
            <ArticleAuthor author={article.author} />
          </div>
        ))}
      </div>
      <div className="buttonbox">
        <button className="button">See All Articles</button>
      </div>
    </>
  );
};

export default ArticlePic;
