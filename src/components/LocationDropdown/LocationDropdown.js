import { UL, Wrapper } from './LocationDropdownElements';
import { MdPlace } from 'react-icons/md';

function LocationDropdown({ setLocation }) {
  const Location = [
    'Helsinki, Finland',
    'Turku, Finland',
    'Vaasa, Finland',
    'Oulu, Finland',
  ];
  return ( 
    <div>
      <Wrapper>
        {Location.map((location, id) => (
          <div key={id}>
            <UL>
              <li  onClick={() => setLocation(location)}>
                <MdPlace /> {location}
              </li>
            </UL>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}

export default LocationDropdown;
