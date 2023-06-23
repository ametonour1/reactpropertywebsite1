import React from 'react';
import { useState } from 'react';
import { PropertyItem } from "../Components/PropertyItem";
import { PropertyList} from "../Helpers/PropertyList";
import "../Styles/properties.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from "react-router-dom"


export const Properties = () => {
    const [loactionFilter, setLocationFilter] = useState("")

    const[dropDown, setDropDown] = useState(false);
    const toggleDropDown = () =>{
        setDropDown(!dropDown);
    };

  let locationsObject = PropertyList.map(a => a.location);

  const obj = {};
  for (let i of locationsObject) {
      obj[i] = true;
  }

 let locationsArray = Object.keys(obj);
 
    
  return (
    <div className='properties'>
        <div className='propertiesheader'>
        <h1>Aveilable Properties</h1>
        </div>
        <button className='locationdropdown' onClick={toggleDropDown}>Location<ArrowDropDownIcon fontSize='large'/></button>
        <div className='sidebar' id={dropDown ? "up" : "down"}>
        <button className='allbtn' onClick={() => {
        setLocationFilter("")
        }}>All</button>
        <div className='propertyfilter'>
            {locationsArray.map((eachLocation) => {
                return <button className='changebtn' onClick={() => {
                    setLocationFilter(eachLocation)
                    }}>{eachLocation}</button>
            })}
        </div>
        </div>
        <div className='propertylist'>
            {PropertyList.map((propertyItem,key) => {
                const property = propertyItem;
                if (loactionFilter !== "") {
               if (propertyItem.location === loactionFilter) {
                return <Link className='propertylink' to= "/propertypresent" state={property}  ><div> <PropertyItem key={key} image = {propertyItem.image} type={propertyItem.type} price={propertyItem.price} location={propertyItem.location}/></div></Link>
            }  } else {
                return <Link className='propertylink' to= "/propertypresent" state={property}  ><div> <PropertyItem key={key} image = {propertyItem.image} type={propertyItem.type} price={propertyItem.price} location={propertyItem.location}/></div></Link>

            } 
            })}
        </div>
    </div>
  )
}
