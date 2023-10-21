import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLoader } from "shared/loaders/main-loader";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<MainLoader />}>{component()}</Suspense>
    </BrowserRouter>
  );
