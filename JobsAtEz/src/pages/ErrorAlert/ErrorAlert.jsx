import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import React from 'react'

const ErrorAlert = ({error}) => {
  return (
    <Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Error!!!</AlertTitle>
  <AlertDescription>
    
  </AlertDescription>
</Alert>
  )
}

export default ErrorAlert