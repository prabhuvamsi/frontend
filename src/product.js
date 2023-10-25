import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import novelData from './data';

const journalData = [
  {
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.saAhDoa-4CoGqmpaNmrgFgHaJv&pid=Api&P=0&h=180',
    price:'222'

  },
  {
    category: 'novels',
    image: 'https://tse1.explicit.bing.net/th?id=OIP.6GkIH3C8V1ZXxJ4S4aUd6QHaJ1&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.uY4m9cMEROwHK2k8ve2ebAHaI2&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.h5U3ikdrqVD9M_9kd84hUAHaJu&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.CNoIIdirkTxS7967nGAqlgHaKX&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.o21UA0X3zOqsVEx4EtpHPwHaKe&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse4.explicit.bing.net/th?id=OIP._EvDvwdA2sWZIHAXXg5WfgHaLN&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.wJGBWERrdWVv-BkXlrkb8wAAAA&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.Opf78gp0WnN4KpR4yP9X9gHaKg&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.RahD_x2-Z4fu5QdW602X-wAAAA&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.4dGHqZBzSz4iTSOgx3OIQgAAAA&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.-lNd6Y1Uy2QaVQjo86fopwAAAA&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.bXEhjG7eCFSkPSmL-wSM1AHaJm&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.7PXFVsKfmBjC_J4lhPwDqAHaK2&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.-2EBujOGMI-VG8OvDtJ_VgHaKe&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.gTlb3citM1h4WUGlpP45WwAAAA&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.E6THmMVshGup3Z1BHlYJQgAAAA&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.C9rqjKGj719WooJEmtCwqgHaJo&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.cIhfsHEf4THbTR8O7vmVlgHaKj&pid=Api&P=0&h=180',
    price:'222'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.YPqFCna-5A4GBfX45HMW6wHaJ4&pid=Api&P=0&h=180',
    price:'222'

  },
 
];

const devotionalData = [
  {
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.3QgIFB-hgG-sNgY806o_BQAAAA&pid=Api&P=0&h=180',
    price:'555'

  },
  {
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.-gP_bMUn0FmmknyiAf-TKwAAAA&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.Sp-tSTP-ZlKbaZWNck48XgAAAA&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.8x6YLRlh0zrKRTnluRbE1AHaLc&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.wFj89qXXBHitHU2x36XYhQAAAA&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.kx3YowmvpQRuQZcnHs2MaQHaLV&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.JqhhdP9-Y2iqsLPKy5UdjAHaIR&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.IWX1KyZDLhsIFHk8B3dcWgHaKJ&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse1.explicit.bing.net/th?id=OIP.iFtUi0ffRONk-iyS7-cAbwAAAA&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.XoRmD3Iagka_ign0UiwrvwHaLH&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.Ko-uZ1UuQXAZtbnyZ95jQgHaLJ&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.YiaTkTJIBBv3NWs2e96mAAHaKb&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.Lk6iYfX4gAHxQ-fb5mhRMwHaLI&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.EIwRXOX_wTegFTQyEopPoQHaLB&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.VlpVHwcQ6grxrKfWSzTgegAAAA&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.dsaum4T9e44hq74YYV6ChgHaLX&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.pSB1CEgRqMx0AN0f9m56tgAAAA&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.hpsfkfUxSQopSf0n7CiJCAHaLD&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.rvoFeBY8VJIkaSbzdmng3gAAAA&pid=Api&P=0&h=180',
    price:'555'

  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.o8BlmG3RbV_ma9uWDd1I-AHaK0&pid=Api&P=0&h=180',
    price:'555'

  },

];

const businessData = [
  {
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.JL79zsSIG04mkhelfas73gHaLa&pid=Api&P=0&h=180',
  },
  {
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.bJplSHV_FXEQPDchGjRBYAHaLH&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.--fl2a-jrzWJ15yc5SMx0QHaLG&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.UHgaprEdQu8Wd6lThOTfsQHaLH&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse4.mm.bing.net/th?id=OIP.ZwH9tzvxhq1MQatYOqtDVwAAAA&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.cgiJJaHwajoOHIa29o89PwAAAA&pid=Api&P=0&h=180',
  },
  {
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.y2AH4QxJ8N4iiCUwft9hiQHaJr&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.ASCAoryCN1v2HMDwYltJkgHaLL&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP._qoC3tWUwWtKKLGElUh1oQHaLC&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.IovaSy6zqr7RsBe_SWGgVwHaLH&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.BJGfCl8p0YNy_TYzbu2TJQHaIz&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.a8pjklRmwdt8cbDZ1FvIBQAAAA&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse3.mm.bing.net/th?id=OIP.mwq6qIV7Qjku1it8zfGBcAAAAA&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.X13dTSZpoGEOH6bTwBM8yAAAAA&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.hKVJfvht5DEZ8JpxPaHHfgHaJS&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.EwODEbvhVfflnyvYofNpkAHaLH&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse1.mm.bing.net/th?id=OIP.8ty9olQcXa0MgeWq61twxgAAAA&pid=Api&P=0&h=180',
  },{
    category: 'novels',
    image: 'https://tse2.mm.bing.net/th?id=OIP.JdapgBPkwGfznJMsLcxySAAAAA&pid=Api&P=0&h=180',
  },

];


const Card = () => {
  const [selectedCategory, setSelectedCategory] = useState('novels');
  const [selectedCard, setSelectedCard] = useState(null);

  const filteredData =
    selectedCategory === 'novels'
      ? novelData
      : selectedCategory === 'journals'
      ? journalData
      : selectedCategory === 'devotional'
      ? devotionalData
      : selectedCategory === 'business'
      ? businessData
      : [];

const{cart,setCart}=useState([])
  const openCardModal = (card) => {
    setSelectedCard(card);
  };

 
  const closeCardModal = () => {
    setSelectedCard(null);
  };
 const handleClick  = () =>{
  console.log(novelData)

 }
  return (
    <div>
      <div className="navbar">
        <button onClick={() => setSelectedCategory('novels')}>Novels</button>
        <button onClick={() => setSelectedCategory('journals')}>Journals</button>
        <button onClick={() => setSelectedCategory('devotional')}>Devotional</button>
        <button onClick={() => setSelectedCategory('business')}>Business</button>
        <button onClick={handleClick}> Add to cart</button>
        <Link to="/"><button>Home</button></Link>
        <Link to="/cart"><button>cart({cart})</button></Link>

      </div>

      <div className="card-container">
        {filteredData.map((card, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img
              src={card.image}
              className="card-img-top"
              alt={card.title}
              onClick={() => openCardModal(card)} 
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <p className='card-text'>price:{card.price}</p>
              <a href="# " className="btn btn-primary" onClick={() => openCardModal(card)}>
                VIEW
              </a>
            </div>
          </div>
        ))}
      </div>
      {selectedCard && (
        <div className="card-modal">
          <div className="card-modal-content">
            <img src={selectedCard.image} alt={selectedCard.title} className="modal-image" />
            <h5>{selectedCard.title}</h5>
            <p>{selectedCard.text}</p>
            <button onClick={closeCardModal}>Close</button>
          </div>
        </div>
      )}

      <style>
     
        {`
          .navbar {
            display: flex;
            justify-content: space-around;
            padding: 10px;
            background-color: lightgray;
          }

          .navbar button {
            padding: 5px 10px;
            background-color: #fff;
            color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .navbar button:hover {
            background-color: #ddd;
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
            cursor: pointer; 
          }
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            
             
          }
          .card {
            transition: border 0.3s ease;
            
          }
          .card-img-top {
            max-height: 500px;
            object-fit: cover;
          }

          .modal-image {
            max-height: 80vh;
            max-width: 90%;
            object-fit: contain;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .card-text {
            color: #333;
          }

          .btn-primary {
            background-color: #007bff;
            color: #fff;
          }

          
          .card-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 999;
          }

          .card-modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            max-height: 80vh; 
            max-width: 50%; 
            overflow: auto;
          }
        `}
      </style>
    </div>
  );
};

export default Card;