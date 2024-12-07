import React, { Children, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const contry=['Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin 1 ',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso 2 ',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo, 3  Democratic Republic of the',
    'Congo, Republic of the',
    'Costa 4  Rica',
    'Côte d Ivoire',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia 5 ',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India 6 ',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan 7 ',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia 8 ',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria 9 ',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia 10 ',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South 11  Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan 12 ',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam 13 ',
    'Yemen',
    'Zambia',
    'Zimbabwe']

const BookNow = () => {
    const {id}=useParams();
    let [BookNowDetails, setBookNowDetails]=useState({
        tripname: '',
        Adults: 0,
        Children: 0,
        ArrivalDate: 0,
        DepartureDate: 0,
        fullname: '',
        email: '',
        contact: '',
        address: '',
        country: '',
        message: ''
    })

    useEffect(()=>{
        setBookNowDetails({...BookNowDetails, tripname:id})
    },[])

    const handleBookNow=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setBookNowDetails({...BookNowDetails, [name]:value});
    }

    const handleSubmit=async ()=>{
        console.log("Book now details ", BookNowDetails);
    }

  return (
    <div>
        <h1>Book Now</h1>
        <div>
        <div>
            <label htmlFor="">Trip Name</label>
            <input type="text" name='tripname' id='tripname' value={BookNowDetails.tripname} onChange={handleBookNow}/>
        </div>
        <div>
            <h1>Number of Travellers</h1>
            <select name="" id="" onChange={(e)=>setBookNowDetails({...BookNowDetails, Adults:e.target.value})}>
                <option value="Adults">Adults</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10+">10+</option>
            </select>

            <select name="" id="" onChange={(e)=>setBookNowDetails({...BookNowDetails, Children:e.target.value})}>
                <option value="Adults">Children</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10+">10+</option>
            </select>
        </div>
        <div>
            <label htmlFor="ArrivalDate">Arrival Date</label>
            <input type="date" name='ArrivalDate' id='ArrivalDate' value={BookNowDetails.ArrivalDate} onChange={handleBookNow}/>
        </div>
        <div>
            <label htmlFor="DepartureDate">Dispature Date</label>
            <input type="date" name='DepartureDate' id='DepartureDate' value={BookNowDetails.DepartureDate} onChange={handleBookNow}/>
        </div>
        <div>
            <h1>Personal Information</h1>
            <div>
                <label htmlFor="fullname">Full Name: </label>
                <input type="text" name='fullname' id='fullname' value={BookNowDetails.fullname} onChange={handleBookNow} />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" name='email' id='email' value={BookNowDetails.email} onChange={handleBookNow} />
            </div>
            <div>
                <label htmlFor="contact">Contact Number: </label>
                <input type="number" name='contact' id='contact' value={BookNowDetails.contact} onChange={handleBookNow} />
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input type="text" name='address' id='address' value={BookNowDetails.address} onChange={handleBookNow} />
            </div>
            <div>
                <label htmlFor="">Country</label>
                <select name="" id="" onChange={(e)=>setBookNowDetails({...BookNowDetails, country:e.target.value})}>
                    {
                        contry.map((element, index)=>{
                            return <option key={index} value={element}>{element}</option>
                        })
                    }
                </select>
            </div>
            <div>
                <h1>Message: </h1>
                <textarea name="message" id="message" rows={10} cols={50} value={BookNowDetails.message} onChange={handleBookNow}></textarea>
            </div>
            <div>
                <button onClick={handleSubmit}>Send for Enquiry</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BookNow