import { FiAlertTriangle } from "react-icons/fi"

const Alert = ({ title = "Alert", description = "" }) => {
  return (
    <div
      role="alert"
      className="shake mb-4 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 px-4 py-3 flex items-start gap-3"
    >
      <FiAlertTriangle className="mt-0.5 h-5 w-5 flex-none" aria-hidden />
      <div>
        <p className="font-semibold">{title}</p>
        {description ? <p className="text-sm mt-0.5">{description}</p> : null}
      </div>
    </div>
  )
}

export default Alert
