import Card from './Card'

function Tours({tours, removeTour}) {
    return (
 <div className='container'>
    <div>
    <h2 className='title'>Plan With Me</h2>
    </div>
    <div className='cards'>
        {tours.map( (tour) => {
            return <Card {...tour} removeTour={removeTour} key={tour.id} />

        } )
        }
  </div>
 </div>
    )
};
export default Tours; 