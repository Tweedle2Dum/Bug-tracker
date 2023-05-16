import React from 'react'
import { Alert,AlertIcon } from '@chakra-ui/react'

export default function FormError({formError}) {
  return (
   <>
    {formError && (
            <Alert status="error" display={"flex"} justifyContent={"center"}>
              <AlertIcon />
              {formError}
            </Alert>
          )}
   </>
  )
}
