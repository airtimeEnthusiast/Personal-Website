// InfoCard.js
const InfoCard = ({ title, description, value, unit, link }) => {
    return (
      <div className="info-card">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          {value}
          {unit}
        </p>
        {link ? (
                <p>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        More Info
                    </a>
                </p>
            ) : (
                <p>No link available</p>
            )}
      </div>
    );
  };
  
  export default InfoCard;
  