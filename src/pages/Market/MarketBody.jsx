import CryptoInfo from './CryptoInfo';

function MarketBody({ coins }) {

    return (
        <div className='m-4 text-center'>

            <h2>Market Overview</h2>

            <table className='table'>

                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Volume</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        coins.map((coin, index) => (

                            <CryptoInfo
                                key={coin.id}
                                index={index + 1}
                                coin={coin}
                            />

                        ))
                    }

                </tbody>

            </table>

        </div>
    );
}

export default MarketBody;