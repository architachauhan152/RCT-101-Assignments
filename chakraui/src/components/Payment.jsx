import React from 'react'
import { Input, Stack,Text,Button, WrapItem , Heading } from '@chakra-ui/react'


export default function Payment() {
  return (
    <>
     
<center>
    <div style={{
      height: "500px",
      width: "400px",
      padding: "5px",
      marginTop:"145cdpx"
      
      
    }}>

     
      
      <Heading as='h4' size='md'>
      Payment Details
  </Heading>

  <Stack spacing={4}>
    
  <Input variant='flushed' 
   isInvalid
   errorBorderColor='red.300'
   
   placeholder='John Smith' />
  <Input variant='flushed'
  isInvalid
  errorBorderColor='red.300'
  placeholder='4256  7890 5678 4532' />
  <div style={{
    display: "flex",
    
  }}>
  <Input style={{width:"105px"}}
   variant='flushed'

  isInvalid
  errorBorderColor='red.300'
  
  placeholder=' 5678 ' />
   <Input style={{width:"105px",
   marginLeft:"40px"}} variant='flushed'
  isInvalid
  errorBorderColor='red.300'
  placeholder='4256 ' />
   <Input style={{width:"105px", marginLeft:"40px"}} variant='flushed'
  isInvalid
  errorBorderColor='red.300'
  placeholder='4532' />

  </div>
  <div style={{display:"flex"}}> 

  <h1 style={{fontSize:"20px"}}>Payment amount: </h1>  <Text fontSize='20px' color='tomato'>
     12 300 P
</Text>
  </div>
  <WrapItem style={{ marginLeft:'140px'}}>
      <Button style={{ paddingLeft:"50px",
    paddingRight:"50px"}} colorScheme='red' size='lg'>Pay</Button>
  </WrapItem>

  
  </Stack>
  </div>

</center>

  </>
    
  )
}
