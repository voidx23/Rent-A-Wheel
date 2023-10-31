

function CarListingCard({ car }) {
  return (
    <div className="border p-4 m-4 w-64">
      <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
      <img src={car.image} alt="" />
      <h4>Approval Status:<span>{car.isApproved}</span></h4>
    </div>
  );
}

export default CarListingCard;
