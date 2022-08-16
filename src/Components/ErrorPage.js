import React from 'react'

const ErrorPage = () => {
  return (
    <>
    <div id='notFound'>
        <div className='notFound'>
            <div className='notfound-404'>
                <h1>404</h1>
            </div>
            <h2>Sorry! Page Not Found</h2>
            <p className='mb-5'>NO PAGE FOUND</p>
            <a href="/">Back to homepage</a>
        </div>
    </div>
    </>
  )
}

export default ErrorPage;