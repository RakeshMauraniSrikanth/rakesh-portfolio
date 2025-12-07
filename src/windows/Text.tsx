import { WindowControls } from '#components'
import WindowsWrapper from '#hoc/WindowWrapper'
import useWindowStore from '#store/window'

const Text = () => {
  const { windows } = useWindowStore()

  const data = windows.txtfile?.data
  if (!data) return null

  const { name, imageUrl, subtitle, description } = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6 bg-white">
        {imageUrl && (
          <div>
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto rounded"
            />
          </div>
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold">
            {subtitle}
          </h3>
        )}

        {Array.isArray(description) && description.length > 0 && (
          <div className="space-y-3">
            {description.map((para: string, index: number) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

const TextWindow = WindowsWrapper(Text, 'txtfile')
export default TextWindow
