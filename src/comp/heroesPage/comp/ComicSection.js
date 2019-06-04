import React from 'react';

const comicsData = [{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
},{
  title: 'Comic title',
  description: 'asdfkjasdlf sadlfkjasd lfkjasdlkfj asldkfjasldkfjasldkfjalskd fjlaksdjflaksdjflskdjfl dfjdkjfdkjfdkjf',
  imageSrc: 'https://via.placeholder.com/100x160'
}];

const ComicSection = () => (
  <div>
    <div className={ 'comic-section' }>
      { comicsData.map(comic => (
        <div className={ 'comic-section__comic-container'}>
          <img src={ comic. imageSrc } />
          <p>{ comic.title }</p>
        </div>
      ))}
    </div>
  </div>
);

export default ComicSection;
