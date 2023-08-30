import React from 'react';
import './TutorialPic.css'; 
import ArticleName from './articlename';
import ArticleDescription from './articleinfo';
import ArticleContent from './articleauthor';

const tutorialData = [
  {
    name: 'Tutorial 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit',
    author: 'Author 1',
    imageURL: '/d.jpg', 
  },
  {
    name: 'Tutorial 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit.',
    author: 'Author 2',
    imageURL: '/e.jpg', 
  },
  {
    name: 'Tutorial 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor maiores magni, veritatis rem vitae quisquam autem saepe iusto reprehenderit ducimus pariatur vero, corrupti, velit delectus voluptatibus aliquam est! Omnis, velit',
    author: 'Author 2',
    imageURL: '/f.jpg', 
  },
  
];

const TutorialPic = () => {
  return (
    <>
      <h2 className="titletext">FEATURED TUTORIALS</h2>
      <div className="tutorialphotos">
        {tutorialData.map((tutorial, index) => (
          <div key={index} className="imagedesc">
            <img src={tutorial.imageURL} alt={tutorial.name} className="photo" />
            <ArticleName name={tutorial.name} />
            <ArticleDescription description={tutorial.description} />
            <hr />
            <ArticleContent author={tutorial.author} />
          </div>
        ))}
      </div>
      <div className="buttonbox">
        <button className="button">See All Tutorials</button>
      </div>
    </>
  );
};

export default TutorialPic;