import * as React from 'react'
export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = React.useRef(document.title).current
  React.useEffect(() => {
    document.title = title
  }, [title])

  React.useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle
      }
    }
  }, [keepOnUnmount, oldTitle])
}
