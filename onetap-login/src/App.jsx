import { GoogleLogin } from '@react-oauth/google';
import './App.css'

import { useGoogleOneTapLogin } from '@react-oauth/google';

function App() {
  // useGoogleOneTapLogin({
  //   onSuccess: credentialResponse => {
  //     console.log(credentialResponse);
  //   },
  //   onError: () => {
  //     console.log('Login Failed');
  //   },
  //   useOneTap: true,
  // });
  return (
    <>
      <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        shape='pill'
        theme='filled_blue'
        size='large'
        onError={() => {
          console.log('Login Failed');
        }}
        useOneTap
      />
    </>
  )
}

export default App
