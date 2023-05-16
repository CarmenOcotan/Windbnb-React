import AppContext from './AppContext';
import { useState } from 'react';
import StayData from '../Data/Data';
const AppState = (props) => {
  const [location, setLocation] = useState('Location');
  const [count, setCount] = useState(0);
  const [navExpand, setNavExpand] = useState(false);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [Filtro, setFiltro] = useState(StayData)
  let filterData = StayData.filter((item) => {
    return item.city;
  });
  
  const Toggle = () => {
    setNavExpand(!navExpand);
  };

  const FilC=() => {
    const Guests = adult + child
    let ciudad = ""
    if(location.includes('Vaasa')){
      ciudad="Vaasa"
    } else if (location.includes('Helsinki')){
      ciudad="Helsinki"
    }else if(location.includes('Turku')){
      ciudad="Turku"
    }else{
      ciudad= 'Oulu'
    }
    
    let filtroResult = StayData;

      if (location !== "Location") {
        filtroResult = filtroResult.filter((Element) => Element.city === ciudad);
      }
      if (Guests !== 0) {
        filtroResult = filtroResult.filter(
          (Element) => Element.maxGuests >= Guests
        );
      }

      Toggle();
      setFiltro(filtroResult);
  }

  const Limpiar = () => {
    setFiltro(StayData);
    setChild (0);
    setAdult (0);
    setCount (0);
    setLocation ('Location');
    Toggle ()
  }
  return (
    <AppContext.Provider
      value={{
        FilC,
        setFiltro,
        Filtro,
        Toggle,
        StayData,
        Limpiar,
        filterData,
        location,
        setLocation,
        count,
        setCount,
        navExpand,
        setNavExpand,
        adult,
        setAdult,
        child,
        setChild,
        isOpen,
        setIsOpen,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
