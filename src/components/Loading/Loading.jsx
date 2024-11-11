import { ScaleLoader } from "react-spinners"
import './loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <ScaleLoader color="lime" className="spinner" />
    </div>
  )
}

export default Loading
