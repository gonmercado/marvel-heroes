import React, { useEffect, useState } from 'react';
import ComicSection from './ComicSection';
import getAxios from "../../../setupAxios";

const HeroData = {
  imageSrc: 'https://via.placeholder.com/300',
  imageAlt: 'Iron man',
  name: 'Iron man',
  description: 's dfasd fasd fasdf asdf asdfasdfasd fasdf as sa fs f'
};

const HeroesDetail = () => {
    const [ hero, setHero ] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const heroResp = await getAxios().get('/detail?resourceName=character&resourceId=154030&typeId=4005');
            setHero(heroResp.data.results);
        }
        fetchData();
    }, []);

    return (
        <>
            {
                hero && <div className={ 'hero-details' }>
                    <div className={ 'hero-details__information' }>
                        <div>
                            <h2>{ hero.name }</h2>
                            <p>{ hero.description }</p>
                        </div>
                        <img src={ hero.image.original_url } alt={ hero.name } />
                    </div>
                    <div className={ 'hero-details__sections-buttons' }>
                        <div className={ 'hero-details__sections-buttons_active' }>Comics</div>
                        <div>Series</div>
                        <div>Stories</div>
                    </div>
                    <div className={ 'hero-details__section-detail' }>
                        <ComicSection />
                    </div>
                </div>
            }
        </>

    );
}

export default HeroesDetail;
