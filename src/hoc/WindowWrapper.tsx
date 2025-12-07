import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import {
  type ComponentType,
  type FC,
  useLayoutEffect,
  useRef
} from 'react'

gsap.registerPlugin(Draggable)

type WindowWrapperProps = Record<string, unknown>

const WindowWrapper = <P extends WindowWrapperProps>(
  Component: ComponentType<P>,
  windowKey: string
): FC<P> => {
  const Wrapped: FC<P> = (props) => {
    const { focusWindow, windows } = useWindowStore()

    const ref = useRef<HTMLDivElement | null>(null)

    const window = windows[windowKey]
    const isOpen = window?.isOpen ?? false
    const zIndex = window?.zIndex ?? 0

    useGSAP(
      () => {
        const el = ref.current
        if (!el || !isOpen) return

        el.style.display = 'block'

        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          }
        )
      },
      { dependencies: [isOpen] }
    )

    useGSAP(() => {
      const el = ref.current
      if (!el) return

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey)
      })

      return () => instance.kill()
    }, [])

    useLayoutEffect(() => {
      const el = ref.current
      if (!el) return

      el.style.display = isOpen ? 'block' : 'none'
    }, [isOpen])

    if (!window) return null

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute"
      >
        <Component {...props} />
      </section>
    )
  }

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || 'Component'
  })`

  return Wrapped
}

export default WindowWrapper
