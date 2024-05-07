import React from 'react';
import './CategoryCard.scss';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ item }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gigs?search=${item.name}`);
  };

  return (
    <div className="categoryCard" onClick={handleSubmit}>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3> 
    </div>
  );
};

export default CategoryCard;
