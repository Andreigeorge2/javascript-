// @ts-nocheck
document.addEventListener('DOMContentLoaded', function() {
    const bitcoinPrice = document.getElementById('bitcoin');
    const ethereumPrice = document.getElementById('ethereum');
    const dogecoinPrice = document.getElementById('dogecoin');

    async function fetchCryptoPrices() {
        try {
            const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd');
            const data = await response.json();
            bitcoinPrice.textContent = data.bitcoin.usd.toFixed(2);
            ethereumPrice.textContent = data.ethereum.usd.toFixed(2);
            dogecoinPrice.textContent = data.dogecoin.usd.toFixed(2);
        } catch (error) {
            console.error('Error fetching crypto prices:', error);
        }
    }

    fetchCryptoPrices();
    setInterval(fetchCryptoPrices, 60000); 
});


  





    
















    
    

  

    




 




    







