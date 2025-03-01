
import Layout from './layouts/Layout'
import { DashboardAPI } from './apis/DashboardAPI'
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useBuilderConfig } from './lib/ContextAPI';
import PageContainer from './PageContainer';

function App() {
  const { builderConfig, setBuilderConfig } = useBuilderConfig();
  const { isSuccess, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => DashboardAPI.get_config(),
    
  })
  useEffect(() => {
    if(isSuccess){
      setBuilderConfig(data.data)
    }
    return () => {

    }
  }, [data,isSuccess])
  

  return (
    <>
      <Layout >
        <PageContainer />
      </Layout>
    </>
  )
}

export default App
