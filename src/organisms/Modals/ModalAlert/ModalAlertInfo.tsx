export const ModalAlertInfo = ({
  title,
  description,
}: {
  title?: string
  description?: string
}): JSX.Element => {
  return (
    <>
      {}
      {title && <p>{title}</p>}
      {description && <p>{description}</p>}
    </>
  )
}
