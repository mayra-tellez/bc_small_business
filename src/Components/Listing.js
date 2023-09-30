import React, { useEffect } from 'react'
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'


const Listing = (props) => {
    useEffect(() => {
      console.log(props);
    }, [props])

  return (
    <Container maxWidth="lg" className="car-container">
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Hours</TableCell>
                <TableCell>Address</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {props.listings.map((listings, idx) => (
            <TableRow key={listings.id}>
                <TableCell>{listings.name}</TableCell>
                <TableCell>{listings.description}</TableCell>
                <TableCell>{listings.hours}</TableCell>
                <TableCell>{listings.address}</TableCell>
                <TableCell>

                </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
</Container>
   
  )
}





export default Listing