import React from 'react';

const comicsData = [{
  id: 1,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 2,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 3,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 4,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 5,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 6,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 7,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 8,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 9,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 10,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  id: 11,
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
}];

const ComicSection = () => (
  <div>
    <div className={ 'comic-section' }>
      { comicsData.map(comic => (
        <div className={ 'comic-section__comic-container'} key={ comic.id }>
          <img src={ comic.imageSrc } alt={ comic.title } />
          <p>{ comic.title }</p>
        </div>
      ))}
    </div>
  </div>
);

export default ComicSection;
