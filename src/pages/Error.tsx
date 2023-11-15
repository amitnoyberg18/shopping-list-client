import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error  = useRouteError();

  if(isRouteErrorResponse(error)){
    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        <p>
          <i>{error.data.message}</i>
        </p>
      </div>
    );
  }

  if(error instanceof Error){
    return (
      <div id="error-page">
        <h1>Oops! </h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  }

  return <></>
}