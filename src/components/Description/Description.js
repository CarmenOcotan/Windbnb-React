import {
  Descriptions,
  SuperHost,
  TypeHost,
  Ratings,
  Title,
  Wrapper,
  Images,
  H1,
  HeadWrap,
} from './DescriptionElements';
import { AiFillStar } from 'react-icons/ai';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';


const Description = () => {
  const { Filtro, location} = useContext(AppContext);
  return (
    <>
      <div>
        <HeadWrap>
          <H1>Stays in {location}</H1>
          {Filtro.length !== 0 && <div>{Filtro.length}+ Stays</div>}
        </HeadWrap>
        
        <Descriptions>
          {Filtro.map((data, index) => {
            return (
              <div key={index}>
                <Images src={data.photo} alt={data.type} />
                <Wrapper>
                  {data.superHost === true ? (
                    <SuperHost>SUPER HOST</SuperHost>
                  ) : null}

                  <TypeHost>
                    {data.type}. {data.beds} Beds
                  </TypeHost>

                  <Ratings>
                    <AiFillStar style={{ color: 'red' }} />
                    {data.rating}
                  </Ratings>
                </Wrapper>
                <Title>{data.title}</Title>
              </div>
            );
          })}
        </Descriptions>
      </div>
    </>
  );
};

export default Description;
