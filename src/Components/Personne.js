const Personne =({personne})=>{
    return (
        <div className="personne">
          <h3>Coordonnes :</h3>
          <h4>{`Name : ${personne.name}`}</h4>
          <h4>{`Username : ${personne.username}`}</h4>
          <h4>{`Email : ${personne.email}`}</h4>
          <div className="address">
            <h3>ADDRESS :</h3>
            <h4>{`Street : ${personne.address.street}`}</h4>
            <h4>{`Suite : ${personne.address.suite}`}</h4>
            <h4>{`City : ${personne.address.city}`}</h4>
            <h4>{`ZipCode : ${personne.address.zipcode}`}</h4>
          </div>
          <div className="geo">
            <h3>GEO :</h3>
            <h4>{`Lat : ${personne.address.geo.lat}`}</h4>
            <h4>{`Lng : ${personne.address.geo.lng}`}</h4>
          </div>
          <h4>{`Phone : ${personne.phone}`}</h4>
          <h4>{`Website : ${personne.website}`}</h4>
          <div className="company">
            <h3>COMPANY :</h3>
            <h4>{`Name : ${personne.company.name}`}</h4>
            <h4>{`CatchPhrase : ${personne.company.catchPhrase}`}</h4>
            <h4>{`BS : ${personne.company.bs}`}</h4>
          </div>
        </div>
      );
    };
    export default Personne;