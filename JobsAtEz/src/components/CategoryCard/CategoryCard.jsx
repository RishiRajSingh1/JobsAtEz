import React from 'react';
import './CategoryCard.scss';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    
    <div className="container">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3> 
    </div>
    
  );
};

export default CategoryCard;
