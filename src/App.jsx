
import Layout from './layouts/Layout'
import { DashboardAPI } from './apis/DashboardAPI'
import { useQuery } from '@tanstack/react-query';

function App() {
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => DashboardAPI.get_config(),
  })


  return (
    <>
      <Layout />
    </>
  )
}

export default App
