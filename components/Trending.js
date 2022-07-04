import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="https://upload.wikimedia.org/wikipedia/id/3/37/Crowszero.jpg" alt="card image" height="410"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Crow Zero</Card.Text>
         <Card.Text>Bagus 60/70</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="https://m.media-amazon.com/images/M/MV5BYTQyYzg3N2EtNjVlZC00NGViLTkyZjgtYTc2MTVjNTIwNWYwXkEyXkFqcGdeQXVyMTE4MTAxMzUx._V1_.jpg" alt="card image"  height="410"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Ngeri-Ngeri Sedap</Card.Text>
         <Card.Text>Bagus 70/75</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="https://m.media-amazon.com/images/M/MV5BOWE0MmEzYWUtYTg5Ny00YWFhLWIwNTUtNDA2ZDI1NGZkNGQyXkEyXkFqcGdeQXVyOTg4NTQ2MTA@._V1_.jpg" alt="card image"  height="410"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>THE WALKING DEAD</Card.Text>
         <Card.Text>Bagus 75/80</Card.Text>
         </div>
       
      
       </Card>
       </Col>
   </Row>
</Container>

   )
}
export default Trending