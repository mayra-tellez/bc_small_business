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
        {props.business.map((business, idx) => (
            <TableRow key={business.id}>
                <TableCell>{business.name}</TableCell>
                <TableCell>{business.description}</TableCell>
                <TableCell>{business.hours}</TableCell>
                <TableCell>{business.location}</TableCell>
                <TableCell>
                    {/* <DeleteIcon
                        // add onClick method here
                        // onClick={() => props.removeCar(idx)}
                        className="icon text-red" /> */}
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
    </Table>
</Container>
   
  )
}





export default Listing