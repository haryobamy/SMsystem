import { PropsWithChildren, Suspense } from 'react';

export function Suspensed({ children }: PropsWithChildren) {
  return (
    <Suspense
      fallback={
        <div className="w-full flex items-center justify-center  mx-auto h-[100vh] ">
          Loading....
        </div>
      }
    >
      {children}
    </Suspense>
  );
}
