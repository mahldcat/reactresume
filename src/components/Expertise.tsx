import React, { useEffect, useState } from 'react';
import { Bullets } from '../data/types';
import { DataService } from '../services/DataService';
import './Expertise.css';

//https://hyperio.us/angular/data/bulletbreakdowns.json

// Define the data shapes for this data


const Expertise: React.FC = () => {
    const [data, setData] = useState<Bullets | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const dataService = new DataService();

            try {
                const fetchedData = await dataService.getBulletData();
                setData(fetchedData);
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchData(); // Call the async function within useEffect
    }, []);


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className='row banda'>
             {data && (
                <>
                    <div className='col-4'>                
                        <p className='h5'>Technology</p>
                        <ul>
                            {data.technology.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-4'>                
                        <p className='h5'>Languages</p>
                        <ul>
                            {data.languages.map((lang, index) => (
                                <li key={index}>{lang}</li>
                            ))}
                        </ul>
                        <p className='h5'>Development Practices</p>
                        <ul>
                            {data.devPractices.map((dprac, index) => (
                                <li key={index}>{dprac}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='col-4'>
                        <p className='h5'>Hobbies</p>                        
                        <ul>
                        {data.hobbies.map((hobby, index) => (
                            <li key={hobby.name}>{hobby.name}
                            {hobby.properties && (
                                <ul>
                                    {hobby.properties.map((property, propIndex) => (
                                        <li key={propIndex}>{property}</li>
                                    ))}
                                </ul>
                            )}
                            </li>
                       ))}
                       </ul>
                    </div>
                </>
            
            )}
            
        </div>
    );
};

export default Expertise;
