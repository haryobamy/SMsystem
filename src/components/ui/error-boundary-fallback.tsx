import { useEffect } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from './button';

function ErrorBoundaryFallback() {
  const error = useRouteError();
  const navigate = useNavigate();

  const reloadHandler = () => {
    if (window) window.location.reload();
  };

  useEffect(() => {
    // Send error to monitoring tool
    if (error) console.log(error);
  }, [error]);

  return (
    <div className="w-full flex items-center justify-center  mx-auto h-[100vh] ">
      <div className="w-full max-w-[400px] flex flex-col gap-5">
        <p className="font-xl text-center">An Unexpected error has occured.</p>
        <div className="flex flex-col gap-4">
          <Button
            onClick={reloadHandler}
            className="w-full"
            variant="secondary"
          >
            Reload
          </Button>

          <Button
            className="w-full  text-white "
            onClick={() => navigate('/', { replace: true })}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundaryFallback;
