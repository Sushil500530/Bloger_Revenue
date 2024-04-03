
const ArticleCard = () => {
    return (
        <div className="shadow-md border rounded-md">
            <img src="https://i.ibb.co/31JPR15/banner1.jpg" alt="card-image" className="w-full h-[250px] rounded-t-md" />
            <div className="p-5">
               <h1 className=" mt-3"> <span className="px-4 py-2 border-2 border-green-600 rounded-full"> Engineering</span></h1>
                <h1 className="text-xl font-bold my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, magni.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, maxime? Mollitia consequuntur, soluta similique non cumque.</p>
                <div className="flex items-center gap-3 mt-[10%]">
                    <img src="https://i.ibb.co/DV24jYN/male.jpg" alt="person" className="w-12 h-12 bg-black rounded-full" />
                    <div>
                        <h1 className="text-[18px] font-bold">Thomas Petit</h1>
                        <p>April 02, 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;