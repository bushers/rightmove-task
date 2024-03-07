import React, { useEffect, useState } from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';

const DUMMY_PROPERTY = {
    id: 73864112,
    bedrooms: 3,
    summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
    displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
    propertyType: 'Flat',
    price: 1950000,
    branchName: 'M2 Property, London',
    propertyUrl: '/property-for-sale/property-73864112.html',
    contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
    propertyTitle: '3 bedroom flat for sale',
    mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};

const API_ENDPOINT = 'http://localhost:3000/api';
const QUERY_PARAMS = '?maxPrice=700000&propertyTypes=flat,detached&minBeds=2'

const PropertyListing = () => {
    const [listingData, setListingData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_ENDPOINT}/properties${QUERY_PARAMS}`);
                const data = await response.json();
                setListingData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <ul className="PropertyListing">
            {listingData
                .map((property, index) => (
                    <li key={index}>
                        <PropertyCard {...property} />
                    </li>
                ))}
        </ul>
    );
};

export default PropertyListing;
