import React, { useEffect, useState } from 'react';
import data from './data.json';
import { Link, useParams } from 'react-router-dom';
import { HiArrowLongLeft } from "react-icons/hi2";

const CountryDetails = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null); // Rename to 'country'

    useEffect(() => {
        // Find the country with the matching name
        const selectedCountry = data.find(country => country.name === name); // Use 'data' directly
        // Update state with the selected country
        setCountry(selectedCountry);
    }, [name]);

    if (!country) {
        return <div>Loading...</div>; // Or display an error message if country not found
    }

    return (
      <>
     
      <div className='container justify-content-center mt-5'>
      <div className='mt-5 mb-5'>
        <Link to={'/'}>
        <button className=' btn button '><HiArrowLongLeft className='me-1'/> Back </button>
        </Link>
      
      </div>
        <div className="row">
            <div className="col-lg-6"><img src={country.flags.png} height={300} width={400} alt={`${country.name} flag`} className='img-fluid' /></div>
            <div className="col-lg-6 col-sm-12">
                <h3 className='country-details-heading'>{country.name}</h3>
                <div className='mt-5'>
                <div className='row country-details'>
                    <div className='col-lg-6 '>
                    <p><b>Native Name :</b> {country.nativeName}</p>
                <p><b>Population :</b> {country.population}</p>
                <p><b>Region :</b> {country.region}</p>
                <p><b>Capital :</b> {country.capital}</p>
                <p><b>Sub Region :</b> {country.subregion}</p>
                    </div>
                    <div  className='col-lg-6'>
                    <p><b>Top Level Domain :</b> {country.topLevelDomain}</p>
                <p><b>Currencies:</b> {country.currencies[0].name}</p>
                <p><b>Languages :</b> {country.languages[0].name}</p>
              
                    </div>
                </div>
               

                </div>
              
            </div>
        </div>
        </div>
      </>
      
    );
}

export default CountryDetails;
