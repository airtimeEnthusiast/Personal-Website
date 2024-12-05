// InfoCard.js
const InfoCard = ({ title, description, value, unit }) => {
    return (
      <div className="info-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          {value}
          {unit}
        </p>
      </div>
    );
  };
  
  export default InfoCard;
  