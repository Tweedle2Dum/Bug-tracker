import React from 'react'
import { useRef } from 'react'
import {Text,Heading, Card,CardHeader,CardBody,CardFooter, FormControl, FormLabel, Input, FormHelperText, Button } from '@chakra-ui/react'
import { AuthProvider, useAuth } from '../context/AuthContext' 
import { Link } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'


export default function LogIn() {


  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const {currentUser,signup} = useAuth();



  function handleSubmit(e){
    e.preventDefault();
    signup(emailRef.current.value,passwordRef.current.value)
  }
  return (
    
    <>
    <AuthProvider>

      <Card minW={"100%"} boxShadow={"2xl"} >
        <CardHeader>
          <Heading as={"h2"} display={"flex"} justifyContent={"center"}>Log In</Heading>
        </CardHeader>

        <CardBody display={"flex"} flexDir={"column"} gap={"16px"} >
          <FormControl  isRequired >
            <FormLabel>Email Address</FormLabel>
            <Input type="email"  ref={emailRef}/>
            <FormHelperText>
              We' ll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" ref={passwordRef}/>
            <FormHelperText>
              Enter Password
            </FormHelperText>
          </FormControl>

          
          <Button type="submit" colorScheme='blue' size={"lg"} marginBottom={"20px"} onClick={handleSubmit}>Submit</Button>
        </CardBody>
      </Card>
      </AuthProvider>
{/*       <Link as={NavLink} to = "/signup"> Dont have an account? Sign</Link>
 */}
    </>
  )
}
