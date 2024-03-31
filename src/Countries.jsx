import React, { useState } from 'react'
import data from './data.json'
import { Link } from 'react-router-dom'
import CountryDetails from './CountryDetails';
import { IoMdSearch } from "react-icons/io";

const Countries = () => {
 const [countries,setCountries] = useState(data)
 const[search,setSearch]=useState('')
 
 
 const [selectedRegion, setSelectedRegion] = useState('');

//  const filterByRegion = (e) => {
//     const selectedRegion = e.target.value;
//     setSelectedRegion(selectedRegion); // Update selected region
//     console.log(selectedRegion) // value target horahi
//     const filteredByRegionCountries = countries.filter((country) => country.region === selectedRegion);
//     console.log(filteredByRegionCountries)
//     setCountries(filteredByRegionCountries);
// };


const [filteredCountries, setFilteredCountries] = useState([]);

const filterByRegion = (e) => {
    const selectedRegion = e.target.value;
    setSelectedRegion(selectedRegion);
    console.log("Selected Region:", selectedRegion);

    if (selectedRegion === "") {
        console.log("All Regions selected");
        // If "All Regions" is selected, display all countries
        setFilteredCountries(countries);
    } else {
        console.log("Filtering by region:", selectedRegion);
        // Filter countries based on selected region
        const filteredByRegionCountries = countries.filter((country) => country.region === selectedRegion);
        console.log("Filtered Countries:", filteredByRegionCountries);
        setFilteredCountries(filteredByRegionCountries);
    }
};
// function handleSubmit(value) {
 
//     setSelectedRegion(value)
//        const filteredByRegionCountries = countries.filter((country) => country.region === value);

//     setCountries(filteredByRegionCountries);
// }
  return (
    <>
    <div className='container mt-5'>
 
    <div style={{ position: 'relative' }}>
            <IoMdSearch className="mt-2  icon"  size={20} style={{ position: 'absolute', left: -20, top: '30%', transform: 'translateY(-50%)' }} />
            <input 
                type="text" 
                className="search " 
                placeholder="Search For a Country ....." 
                style={{ paddingLeft: 35 , paddingRight:35 , paddingTop:8 , paddingBottom:8 , marginLeft:'-2.8%'}} 
                onChange={(e) => setSearch(e.target.value)} 
            />
        </div>
    <div>
    
 <select
                name="region"
                id="inputRegion"
                value={selectedRegion}
                onChange={filterByRegion}
                className='select'
            >
                <option value="">All Regions</option>
                {/* Assume countries array is available */}
                {countries.map((country) => (
                    <option value={country.region}>
                        {country.region}
                    </option>
                ))}
            </select>
    </div>
    <div className="card-container  justify-content-center">
    {countries.filter((country) => {
          if (selectedRegion === "" || country.region === selectedRegion) {
        if (search == "") {
             return country
        } else if (country.name.toLowerCase().includes(search.toLowerCase())) {
        return country
        I
        }}}).map((country)=>{

    return(
        <>
        
        <div class="card" style= {{ width: '18rem'}} >
        <Link  className="link" key={country.name} to={`/country/${country.name}`}>
            <img class="card-img-top" src={country.flags.png} alt="Card image cap" width={100} height={200}/>
  <div class="card-body">
    <h4 class="card-title">{country.name}</h4>
    <p class="card-text"><b>Population :</b> {country.population}</p>
    <p class="card-text"><b>Region : </b>{country.region}</p>
    <p class="card-text"><b>Capital :</b> {country.capital}</p>
    </div>
    </Link>
            
    
  

</div>

        </>
    )
})}
    </div>
    </div>
    
  
    </>

  )
}

export default Countries