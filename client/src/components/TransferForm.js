import React, { useState } from 'react';

const TransferForm = () => {
    const [asset, setAsset] = useState('');
    const [destination, setDestination] = useState('');

    const handleTransfer = (e) => {
        e.preventDefault();
        // Implement transfer logic here
        console.log(`Transferring ${asset} to ${destination}`);
    };

    return (
        <form onSubmit={handleTransfer}>
            <input
                type="text"
                placeholder="Asset"
                value={asset}
                onChange={(e) => setAsset(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Destination Blockchain"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
            />
            <button type="submit">Transfer</button>
        </form>
    );
};

export default TransferForm;
