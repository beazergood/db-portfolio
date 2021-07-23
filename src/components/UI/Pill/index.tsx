export interface PillProps {
  title: string
}

export const Pill = ({ title }) => {
  return (
    <span className="cursor-default inline-flex mx-1 my-1 rounded-full p-3 bg-purp bg-opacity-5 font-normal text-sm text-purp">
      {title}
    </span>
  )
}
