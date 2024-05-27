
interface CatTitleProps {
    title: string;
}

const CatTitle = (
    { title }: CatTitleProps
) => {
  return (
    <div className="w-full text-start border-b border-gray-100 border-solid pb-1 mb-2">
        <h2
            className="text-white text-2xl font-bold text-start w-full"
        >
            {title}
        </h2>
    </div>
  )
}

export default CatTitle;