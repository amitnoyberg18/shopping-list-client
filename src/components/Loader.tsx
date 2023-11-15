import { Backdrop, CircularProgress } from '@mui/material'


interface Props {
  loading: boolean
}

const Loader: React.FC<Props> = ({loading}) => {
  return (
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={loading}
  >
     <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default Loader