/* eslint-disable react/prop-types */

const ArticleCard = ({data}) => {
    return (
        <div className="shadow-md border rounded-md">
            <img src={data?.image} alt="card-image" className="w-full h-[250px] rounded-t-md" />
            <div className="p-5">
               <h1 className=" mt-3"> <span className="px-4 py-2 border-2 border-green-600 rounded-full"> {data?.category}</span></h1>
                <h1 className="text-xl font-bold my-3"> {data?.title}</h1>
                <p> {data?.description}</p>
                <div className="flex items-center gap-3 mt-[10%]">
                    <img src= {data?.author?.profile} alt="person" className="w-12 h-12 bg-black rounded-full" />
                    <div>
                        <h1 className="text-[18px] font-bold"> {data?.author?.authorName}</h1>
                        <p>{data?.author?.date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;