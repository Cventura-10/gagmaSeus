import React, { useState, useEffect } from 'react';
import { fetchAssets, fetchLiabilities } from '../../api/api'; // Adjust the import path as necessary

const ChartOfAccounts = () => {
    const [assets, setAssets] = useState([]);
    const [liabilities, setLiabilities] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const [assetsResponse, liabilitiesResponse] = await Promise.all([
                    fetchAssets(),
                    fetchLiabilities(),
                ]);
                setAssets(assetsResponse);
                setLiabilities(liabilitiesResponse);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <section>
                <h2>Assets</h2>
                <ul>
                    {assets.map(asset => <li key={asset.id}>{asset.name} - {asset.value}</li>)}
                </ul>
            </section>

            <section>
                <h2>Liabilities</h2>
                <ul>
                    {liabilities.map(liability => <li key={liability.id}>{liability.name} - {liability.value}</li>)}
                </ul>
            </section>
        </div>
    );
};

export default ChartOfAccounts;
