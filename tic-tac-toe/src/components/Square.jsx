const Square = ({ turn, onClick }) => {

    return (
      <div className="square" onClick={onClick}>
        {turn}
      </div>
    );
  };
  
  export default Square;
  