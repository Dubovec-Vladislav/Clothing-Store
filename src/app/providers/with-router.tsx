import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"

export const withRouter = (component: () => React.ReactNode) => () => (
  <BrowserRouter>
    <Suspense fallback="Загрузка страницы...">
      {component()}
    </Suspense>
  </BrowserRouter>
);